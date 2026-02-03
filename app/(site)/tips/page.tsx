import Header from "@/components/reuseable/header";
import { client } from "@/sanity/lib/client";
import TipsCard from "@/components/reuseable/tips-card";

const Tips = async () => {
  const query = `*[_type == "tip"] | order(_createdAt desc){
    _id,
    title,
    content,
    destination->{title, slug}
  }`;

  const tips = await client.fetch(query);

  return (
    <div>
      <Header bgImg="/tips.png" text="" button="" title="Travel Tips" />
      <main>
        <div className="flex justify-between items-center w-360 mx-auto my-20">
          <div>
            <p className="text-6xl w-140 font-semibold">
              Maintaining your{" "}
              <span className="font-semibold text-[#FFA500]">privacy </span>{" "}
              during travels.{" "}
            </p>
          </div>
          <div className="w-150">
            <p className=" leading-10">
              Helpful tips and practical advice to keep you safe and comfortable
              while traveling.
            </p>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
          {tips?.map((tip: any) => (
            <TipsCard
              key={tip._id}
              image="/tip-placeholder.jpg"
              title={tip.title}
              date={tip._createdAt}
              exerpt={tip.content}
              location={tip.destination?.title || "Unknown Location"}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Tips;
