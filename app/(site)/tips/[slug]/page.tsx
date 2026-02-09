import Navbar from "@/components/reuseable/navbar";
import Header from "@/components/reuseable/header";
import Footer from "@/components/reuseable/footer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import PortableText from "@/components/reuseable/portableText";
import Image from "next/image";
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
export default async function TipsPage({ params }: destinationProps) {
  const { slug } = params;
  // Fetch tip data based on slug
  const query = `*[_type == "tip" && slug.current == $slug][0]{
    _id,
    title,
    content,
    destination->{
      title,
      slug
    }
  }`;

  const tip = await client.fetch(query, { slug });

  if (!tip) {
    notFound();
  }

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-4">{tip.title}</h1>
        {tip.content && (
            <div className="prose max-w-none mb-12">
            <p className="whitespace-pre-wrap">{tip.content}</p>
            </div>
        )}
        {tip.destination && (
            <div className="mt-8">
                <h3 className="text-xl font-bold">Related Destination:</h3>
                <p>{tip.destination.title}</p>
            </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
