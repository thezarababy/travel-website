import Header from "@/components/reuseable/header";
import TipsCard from "@/components/reuseable/tips-card";

const Tips = () => {
  const Tipcard = [
    {
      title: "Going to the Extreme-The Northern Pole",
      image: "/t1.png",
      comment: "25",
    },
    {
      title: "Summer Vibes... Where to spend the energy.",
      image: "/t2.png",
      comment: "15",
    },
    {
      title: "Smartest cities and how to enjoy them.",
      image: "/t3.png",
      comment: "10",
    },
    {
      title: "Going to the wild?\nWhat should you pack?",
      image: "/t4.png",
      comment: "35",
    },
    {
      title: "Foods to try when you Visit Australia.",
      image: "/t5.png",
      comment: "19",
    },
    {
      title: "Beaches And how to enjoy them the most.",
      image: "/t6.png",
      comment: "5",
    },
    {
      title: "Road Trip 101 Things you need to know",
      image: "/t7.png",
      comment: "20",
    },
    {
      title: "Water front precautions to take during travels.",
      image: "/t8.png",
      comment: "28",
    },
    {
      title: "Going to the Extreme\n-The Northern Pole",
      image: "/t9.png",
      comment: "16",
    },
  ];

  return (
    <div id="destination">
      <Header bgImg="/tips.png" text="" title="Travel Tips" />
      <main className=" max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto my-20 gap-10">
          <div>
            <p className="text-4xl md:text-6xl w-full md:w-[600px] font-semibold">
              Maintaining your{" "}
              <span className="font-semibold text-[#FFA500]">privacy </span>{" "}
              during travels.{" "}
            </p>
          </div>
          <div className="w-full md:w-[500px]">
            <p className=" leading-10">
              Helpful tips and practical advice to keep you safe and comfortable
              while traveling. This includes information on health, local
              customs, packing, and navigating new environments.
            </p>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-0 md:px-8 mb-20">
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
