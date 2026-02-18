import Navbar from "@/components/reuseable/navbar";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import PortableText from "@/components/reuseable/portableText";
import Image from "next/image";
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

export default async function DestinationPage({ params }: destinationProps) {
  const { slug } = await params;
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
  return (
    <div>
      <div className="mb-20 w-[80%] mx-auto">
<Navbar />
      </div>
      
      <main className="container flex flex-col items-center justify-center mx-auto px-4 py-10 max-w-4xl">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">{destination.title}</h1>

        {/* Hero Image */}
        {destination.image && (
          <div className="relative w-[350px] h-[350px] mb-10 rounded-lg overflow-hidden">
            <Image
              src={urlFor(destination.image).url()}
              alt={destination.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        
      

        {/* Content (Portable Text) */}
        {destination.content && (
          <section className="prose max-w-none mb-12">
            <PortableText value={destination.content} />
          </section>
        )}

        
        
        
      </main>
    </div>
  );
}
