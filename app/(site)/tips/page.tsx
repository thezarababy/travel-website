import Header from "@/components/reuseable/header";
import { client } from "@/sanity/lib/client";
import TipsCard from "@/components/reuseable/tips-card";

const Tips = async () => {
  const query = `*[_type == "tip"] | order(_createdAt desc){
    _id,
    title,
    content,
    destination->{title, slug},
    _createdAt
  }`;

  const tips = await client.fetch(query);

  return (
    <div>
      <Header bgImg="/tips.png" text="" button="" title="Travel Tips" />
      <main className=" max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center w-[90%] mx-auto my-20">
          <div>
            <p className="text-6xl w-140 font-semibold">
              Maintaining your{" "}
              <span className="font-semibold text-[#FFA500]">privacy </span>{" "}
              during travels.{" "}
            </p>
          </div>
          <div className="w-130">
            <p className=" leading-10">
              Helpful tips and practical advice to keep you safe and comfortable
              while traveling. This includes information on health, local
              customs, packing, and navigating new environments.
            </p>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
          {tips?.map((tip: any) => (
            <TipsCard
              key={tip._id}
              image="/tip-placeholder.jpg"
              title={tip.title}
              date={new Date(tip._createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              exerpt={tip.content}
              location={tip.destination?.title || "Unknown Location"}
              slug={tip.destination?.slug?.current || ""}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Tips;
