import Header from "@/components/reuseable/header";
import TipsCard from "@/components/reuseable/tips-card";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";

interface Tip {
  _id: string;
  title: string;
  slug: { current: string };
  image: any;
  publishedAt: string;
  excerpt: string;
  rating: number;
  commentCount: number;
  destination: { title: string };
}

const getTips = async (): Promise<Tip[]> => {
  return client.fetch(groq`*[_type == "tip"]{
    _id,
    title,
    slug,
    image,
    publishedAt,
    excerpt,
    rating,
    commentCount,
    destination->{title}
  }`);
};

const Tips = async () => {
  const tips = await getTips();

  return (
    <div id="destination">
      <Header bgImg="/tips.png" text="" title="Travel Tips" />
      <main className=" max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto my-20 gap-10">
          <div>
            <p className="text-4xl md:text-6xl w-full md:w-150 font-semibold">
              Maintaining your{" "}
              <span className="font-semibold text-[#FFA500]">privacy </span>{" "}
              during travels.{" "}
            </p>
          </div>
          <div className="w-full md:w-125">
            <p className=" leading-10">
              Helpful tips and practical advice to keep you safe and comfortable
              while traveling. This includes information on health, local
              customs, packing, and navigating new environments.
            </p>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-0 md:px-8 mb-20">
          {tips.map((item) => (
            <TipsCard
              key={item._id}
              image={item.image?.asset ? urlFor(item.image).url() : null}
              title={item.title}
              date={new Date(item.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              exerpt={item.excerpt}
              category={"Travel Tips"}
              location={item.destination?.title || "Unknown"}
              commentsCount={item.commentCount || 0}
              rates={item.rating || 0}
              slug={item.slug.current}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Tips;
