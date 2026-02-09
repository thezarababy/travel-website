import { createClient } from 'next-sanity';
import { urlFor } from '../sanity/lib/image';
import { groq } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../sanity/env';
import * as fs from 'fs';
import * as path from 'path';

// Create a fresh client with useCdn: false
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Bypass CDN
});

async function main() {
  console.log("Fetching fresh data from Sanity (useCdn: false)...");
  try {
    // Fetch Tips
    const tips = await client.fetch(groq`*[_type == "tip"] {
      _id,
      title,
      image,
      "imageUrl": image.asset->url
    }`);

    const processResults = (items: any[], type: string) => {
      return items.map((item: any) => {
        let urlForUrl = null;
        try {
          if (item.image) {
            urlForUrl = urlFor(item.image).url();
          }
        } catch (e) {
          urlForUrl = `Error: ${e}`;
        }

        return {
          _type: type,
          _id: item._id,
          title: item.title,
          hasImage: !!item.image,
          image: item.image,
          sanityUrl: item.imageUrl,
          urlForUrl: urlForUrl
        };
      });
    };

    const results = processResults(tips, 'tip');

    const outputPath = path.join(process.cwd(), 'debug_output_fresh.json');
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
    console.log(`Found ${tips.length} tips.`);
    console.log(`Results written to ${outputPath}`);

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

main();
