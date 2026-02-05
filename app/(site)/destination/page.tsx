import Image from "next/image";
import Header from "@/components/reuseable/header";
import Button from "@/components/reuseable/button";
import DestinationCard from "@/components/reuseable/destination-card";

const page = () => {
  const card = [
    {
      title: "Finding Love & Home In Tbilisi, Georgia",
      image: "/d1.png",
      comment: "25",
    },
    {
      title: "Have you read the Beach by Alex?",
      image: "/young-woman.png",
      comment: "15",
    },
    {
      title: "The writer actually live in philippines",
      image: "/blue-man.png",
      comment: "10",
    },
    {
      title: "Honestly it’s almost ridiculous how",
      image: "/man-bag.png",
      comment: "35",
    },
    {
      title: "The only way to see the islands",
      image: "/view.png",
      comment: "19",
    },
    {
      title: "Get away from the maddening crowds",
      image: "/bus4.png",
      comment: "5",
    },
    {
      title: "Matsumoto castle is considered one of",
      image: "/bridge.png",
      comment: "20",
    },
    {
      title: "Many buildings especially in japan",
      image: "/building.png",
      comment: "28",
    },
    {
      title: "There are roughly 1200 semiwild deer",
      image: "/reindeer.png",
      comment: "16",
    },
  ];

  return (
    <div>
      <Header bgImg="/destination.png" text="" title="Destination" />
      <main className="py-10 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center w-[80%] mx-auto my-20">
          <div>
            <p className="text-5xl w-100">
              <span className="font-semibold text-[#FFA500] underline">
                Where do{" "}
              </span>{" "}
              you want to go?{" "}
            </p>
          </div>
          <div className="w-130">
            <p className=" leading-10">
              Discover curated destinations from our editors — curated stories,
              galleries and travel details to inspire your next trip.
            </p>
          </div>
        </div>
        <section className="grid grid-cols-3 gap-8">
          {card.map((item, idx) => (
            <DestinationCard
              key={`destination-${idx}`}
              image={item.image}
              title={item.title}
              date={"September 16,2018"}
              exerpt={""}
              category={"Tips & Trickss"}
              location={"Georgia"}
              commentsCount={parseInt(item.comment, 10) || 0}
              slug={"finding-love-home-in-tbilisi-georgia"}
            />
          ))}
        </section>
        <section className=" flex mt-30">
          <Image src="/one.png" alt="" width={208} height={260} />
          <Image src="/two.png" alt="" width={208} height={260} />
          <Image src="/three.png" alt="" width={208} height={260} />
          <Image src="/four.png" alt="" width={208} height={260} />
          <Image src="/five.png" alt="" width={208} height={260} />
          <Image src="/six.png" alt="" width={208} height={260} />
          <Image src="/seven.png" alt="" width={208} height={260} />
        </section>
        <section className="flex justify-between my-30">
          <div>
            <p className="font-bold text-4xl w-130">
              Join <span className="text-blue-700 ">98,641</span> Monthly
              Readers. Subscribe Today!
            </p>
          </div>
          <form>
            <input
              type="email"
              placeholder="Email Address"
              className="w-83 h-20 border-2 p-4 mr-5"
            />

            <Button
              label="Subscribe"
              className="rounded-md px-8 py-5 text-white bg-[#0336FF]"
              target=""
            />
          </form>
        </section>
      </main>
    </div>
  );
};

export default page;
