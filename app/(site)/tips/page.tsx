import Header from "@/components/reuseable/header";
import TipsCard from "@/components/reuseable/tips-card";

const Tips = () => {
  const Tipcard = [
    {
      title: "Going to the Extreme\n-The Northern Pole",
      image: "/d1.png",
      comment: "25",
    },
    {
      title: "Have you read the Beach by Alex?",
      image: "/young-woman.png",
      comment: "15",
    },
    {
      title: "The writer actually\nlive in philippines",
      image: "/blue-man.png",
      comment: "10",
    },
    {
      title: "Finding Love & Home In Tbilisi, Georgia",
      image: "/d1.png",
      comment: "35",
    },
    {
      title: "Finding Love & Home In Tbilisi, Georgia",
      image: "/d1.png",
      comment: "19",
    },
    {
      title: "Finding Love & Home In Tbilisi, Georgia",
      image: "/d1.png",
      comment: "5",
    },
    {
      title: "Finding Love & Home In Tbilisi, Georgia",
      image: "/d1.png",
      comment: "20",
    },
    {
      title: "Finding Love & Home In Tbilisi, Georgia",
      image: "/d1.png",
      comment: "28",
    },
    {
      title: "Finding Love & Home In Tbilisi, Georgia",
      image: "/d1.png",
      comment: "16",
    },
  ];

  return (
    <div id="destination">
      <Header bgImg="/tips.png" text="" title="Travel Tips" />
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
          {Tipcard.map((tipcard: any, idx: number) => (
            <TipsCard
              key={`tip-${idx}`}
              image={tipcard.image}
              title={tipcard.title}
              date={"January 15, 2019"}
              exerpt={""}
              category={"Travel Tips"}
              location={"North Pole"}
              commentsCount={12}
              rates={4.8}
              slug={"finding-love-home-in-tbilisi-georgia"}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Tips;
