import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./sanity/env";
import fs from "fs";
import path from "path";

// Define the client with a token (required for write operations)
// You must set SANITY_API_TOKEN environment variable or hardcode it (not recommended for production)
const token = process.env.SANITY_API_TOKEN;

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // We want fresh data
  token: token,
});

const destinations = [
  {
    title: "Finding Love & Home In Tbilisi, Georgia",
    imageFile: "d1.png",
    continent: "Europe",
    publishedAt: "2018-09-17T00:00:00Z",
    excerpt: "A beautiful journey through the heart of Georgia.",
  },
  {
    title: "Have you read the Beach by Alex?",
    imageFile: "young-woman.png",
    continent: "Asia",
    publishedAt: "2019-03-12T00:00:00Z",
    excerpt: "Exploring the hidden gems of Thailand's beaches.",
  },
  {
    title: "The writer actually live in philippines",
    imageFile: "blue-man.png",
    continent: "Asia",
    publishedAt: "2020-01-05T00:00:00Z",
    excerpt: "Life as an expat in the Philippines.",
  },
  {
    title: "Honestly it’s almost ridiculous how",
    imageFile: "man-bag.png",
    continent: "North America",
    publishedAt: "2021-06-20T00:00:00Z",
    excerpt: "Unexpected adventures in the urban jungle.",
  },
  {
    title: "The only way to see the islands",
    imageFile: "view.png",
    continent: "South America",
    publishedAt: "2021-08-15T00:00:00Z",
    excerpt: "Island hopping like a local.",
  },
  {
    title: "Get away from the maddening crowds",
    imageFile: "bus4.png",
    continent: "Africa",
    publishedAt: "2022-02-10T00:00:00Z",
    excerpt: "Safari and serenity in the wild.",
  },
  {
    title: "Matsumoto castle is considered one of",
    imageFile: "bridge.png",
    continent: "Asia",
    publishedAt: "2022-05-01T00:00:00Z",
    excerpt: "Historical wonders of Japan.",
  },
  {
    title: "Many buildings especially in japan",
    imageFile: "building.png",
    continent: "Asia",
    publishedAt: "2022-11-23T00:00:00Z",
    excerpt: "Architecture that blends tradition and modernity.",
  },
  {
    title: "There are roughly 1200 semiwild deer",
    imageFile: "reindeer.png",
    continent: "Asia",
    publishedAt: "2023-04-14T00:00:00Z",
    excerpt: "Wildlife encounters in Nara Park.",
  },
];

const tips = [
  {
    title: "Going to the Extreme-The Northern Pole",
    imageFile: "t1.png",
    excerpt: "Surviving the coldest places on Earth.",
    rating: 5,
  },
  {
    title: "Summer Vibes... Where to spend the energy.",
    imageFile: "t2.png",
    excerpt: "Top destinations for summer fun.",
    rating: 4,
  },
  {
    title: "Smartest cities and how to enjoy them.",
    imageFile: "t3.png",
    excerpt: "Navigating the modern metropolis.",
    rating: 4.5,
  },
  {
    title: "Going to the wild?\\nWhat should you pack?",
    imageFile: "t4.png",
    excerpt: "Essential packing list for wilderness adventures.",
    rating: 5,
  },
  {
    title: "Foods to try when you Visit Australia.",
    imageFile: "t5.png",
    excerpt: "A culinary journey down under.",
    rating: 4.8,
  },
  {
    title: "Beaches And how to enjoy them the most.",
    imageFile: "t6.png",
    excerpt: "Making the most of your beach vacation.",
    rating: 4.2,
  },
  {
    title: "Road Trip 101 Things you need to know",
    imageFile: "t7.png",
    excerpt: "Planning the perfect road trip.",
    rating: 4.7,
  },
  {
    title: "Water front precautions to take during travels.",
    imageFile: "t8.png",
    excerpt: "Staying safe near the water.",
    rating: 3.9,
  },
  {
    title: "Going to the Extreme\\n-The Northern Pole",
    imageFile: "t9.png",
    excerpt: "Another perspective on polar expeditions.",
    rating: 4.6,
  },
];

async function uploadImage(imagePath: string) {
  try {
    if (!fs.existsSync(imagePath)) {
      console.warn(`Image not found: ${imagePath}`);
      return null;
    }
    const buffer = fs.readFileSync(imagePath);
    const asset = await client.assets.upload("image", buffer, {
      filename: path.basename(imagePath),
    });
    return asset;
  } catch (error) {
    console.error(`Failed to upload image ${imagePath}:`, error);
    return null;
  }
}

async function main() {
  if (!token) {
    console.error(
      "Error: SANITY_API_TOKEN environment variable is not set. Please provide a token with write access."
    );
    process.exit(1);
  }

  console.log("Starting data population...");

  // Create Destinations
  const destinationDocs = [];
  for (const dest of destinations) {
    console.log(`Processing destination: ${dest.title}`);
    const imagePath = path.join(process.cwd(), "public", dest.imageFile);
    const imageAsset = await uploadImage(imagePath);

    const doc = {
      _type: "destination",
      title: dest.title,
      slug: { _type: "slug", current: dest.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") },
      content: [], // Empty content for now
      continent: dest.continent,
      excerpt: dest.excerpt,
      publishedAt: dest.publishedAt,
      commentCount: Math.floor(Math.random() * 50),
      image: imageAsset
        ? {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: imageAsset._id,
            },
          }
        : undefined,
    };

    const created = await client.create(doc);
    destinationDocs.push(created);
    console.log(`Created destination: ${created._id}`);
  }

  // Create Tips
  for (const [index, tip] of tips.entries()) {
    console.log(`Processing tip: ${tip.title}`);
    const imagePath = path.join(process.cwd(), "public", tip.imageFile);
    const imageAsset = await uploadImage(imagePath);

    // Link strictly to a random destination we created
    const randomDest =
      destinationDocs[Math.floor(Math.random() * destinationDocs.length)];

    const doc = {
      _type: "tip",
      title: tip.title,
      slug: { _type: "slug", current: tip.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") },
      content: "This is a sample tip content.",
      excerpt: tip.excerpt,
      publishedAt: new Date().toISOString(),
      rating: tip.rating,
      commentCount: Math.floor(Math.random() * 30),
      destination: randomDest
        ? {
            _type: "reference",
            _ref: randomDest._id,
          }
        : undefined,
      image: imageAsset
        ? {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: imageAsset._id,
            },
          }
        : undefined,
    };

    const created = await client.create(doc);
    console.log(`Created tip: ${created._id}`);
  }

  console.log("Data population complete!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
