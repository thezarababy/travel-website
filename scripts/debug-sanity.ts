import { client } from '../sanity/lib/client';
import { urlFor } from '../sanity/lib/image';
import { groq } from 'next-sanity';
import * as fs from 'fs';
import * as path from 'path';

async function main() {
  console.log("Fetching data from Sanity...");
  try {
    // Fetch Destinations
    const destinations = await client.fetch(groq`*[_type == "destination"] {
      _id,
      title,
      image,
      "imageUrl": image.asset->url
    }`);
    
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

    const results = [
      ...processResults(destinations, 'destination'),
      ...processResults(tips, 'tip')
    ];

    const outputPath = path.join(process.cwd(), 'debug_output.json');
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
    console.log(`Found ${destinations.length} destinations and ${tips.length} tips.`);
    console.log(`Results written to ${outputPath}`);

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

main();
