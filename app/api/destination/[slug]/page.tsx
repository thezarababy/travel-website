import Navbar from "@/components/reuseable/navbar";
import Footer from "@/components/reuseable/footer";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type destinationProps = {
  params: {
    slug: string;
  };
};

export const metadata: Metadata = {
  title: "Destinations - Travel Website",
  description: "Explore our exciting travel destinations around the world.",
};
const DestinationPage = async ({ params }: destinationProps) => {
  const { slug } = params;
  // Fetch destination data based on slug
  const query = `*[_type == "destination" && slug.current == $slug][0]{
    _id,
 title,
    excerpt,
    content,
    continent,
    description,
    image,
    gallery,
    publishedAt,
    commentCount,
    seo {
      metaTitle,
      metaDescription,
      keywords
    }
  }`;
  const destination = await client.fetch(query, { slug });
  if (!destination) {
    notFound();
  }
};
