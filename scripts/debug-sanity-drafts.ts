import { createClient } from 'next-sanity';
import { urlFor } from '../sanity/lib/image';
import { groq } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../sanity/env';
import * as fs from 'fs';
import * as path from 'path';

// Create a fresh client with useCdn: false and token if available (to read drafts)
// For public datasets, we can read published. For drafts, we usually need a token.
// But if the dataset is public, maybe we can read drafts? usually no.
// Let's try reading without token first. If it fails or returns nothing, we'll know.
// Actually, without a token we can't read drafts usually.
// But let's try querying for everything including drafts.

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, 
  // token: process.env.SANITY_API_TOKEN // We don't have this in env probably
});

async function main() {
  console.log("Fetching drafts and published from Sanity...");
  try {
    // Fetch Tips (published and drafts)
    const tips = await client.fetch(groq`*[_type == "tip"] {
      _id,
      title,
      image,
    }`);

    const results = tips.map((item: any) => ({
      _id: item._id,
      title: item.title,
      hasImage: !!item.image,
      imageRef: item.image?.asset?._ref
    }));

    const outputPath = path.join(process.cwd(), 'debug_output_drafts.json');
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
    console.log(`Found ${tips.length} tips.`);
    console.log(`Results written to ${outputPath}`);

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

main();
