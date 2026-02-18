import Navbar from "@/components/reuseable/navbar";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import PortableText from "@/components/reuseable/portableText";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type destinationProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const metadata: Metadata = {
  title: "Destinations - Travel Website",
  description: "Explore our exciting travel destinations around the world.",
};

export default async function TipsPage({ params }: destinationProps) {
  const { slug } = await params;
  // Fetch tip data based on slug
  const query = `*[_type == "tip" && slug.current == $slug][0]{
    _id,
    title,
    content,
    image,
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
      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">{tip.title}</h1>
        
        {tip.image && (
          <div className="relative w-full h-[300px] mb-8 rounded-lg overflow-hidden">
             <Image
              src={urlFor(tip.image).url()}
              alt={tip.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {tip.content && (
            <div className="prose max-w-none mb-12">
            <p className="whitespace-pre-wrap">{tip.content}</p>
            </div>
        )}
        {tip.destination && (
            <div className="mt-8 border-t pt-4">
                <h3 className="text-xl font-bold mb-2">Related Destination:</h3>
                <Link href={`/destination/${tip.destination.slug.current}`} className="text-blue-600 hover:underline">
                  {tip.destination.title}
                </Link>
            </div>
        )}
      </main>
    </div>
  );
}
