import Navbar from "@/components/reuseable/navbar";
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
export default async function DestinationPage({ params }: destinationProps) {
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
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">{destination.title}</h1>

        {/* Excerpt */}
        <p className="text-lg text-gray-600 mb-8">{destination.excerpt}</p>

        {/* Hero Image */}
        {destination.image && (
          <div className="mb-10">
            <Image
              src={urlFor(destination.image).url()}
              alt={destination.title}
              width={1200}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
        )}

        {/* Description */}
        <div className="prose max-w-none mb-12">
          <p>{destination.description}</p>
        </div>

        {/* Content (Portable Text) */}
        {destination.content && (
          <section className="prose max-w-none mb-12">
            <PortableText value={destination.content} />
          </section>
        )}

        {/* Gallery */}
        {destination.gallery?.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-6">Gallery</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {destination.gallery.map((img: any, index: number) => (
                <Image
                  key={index}
                  src={urlFor(img).url()}
                  alt={`${destination.title} image ${index + 1}`}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
