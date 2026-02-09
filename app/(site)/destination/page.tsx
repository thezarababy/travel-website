import Image from "next/image";
import Header from "@/components/reuseable/header";
import Button from "@/components/reuseable/button";
import DestinationCard from "@/components/reuseable/destination-card";

import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import DestinationList from "./DestinationList";

interface Destination {
  _id: string;
  title: string;
  slug: { current: string };
  image: any;
  publishedAt: string;
  excerpt: string;
  commentCount: number;
  continent: string;
}

const getDestinations = async (): Promise<Destination[]> => {
  return client.fetch(groq`*[_type == "destination"]{
    _id,
    title,
    slug,
    image,
    publishedAt,
    excerpt,
    commentCount,
    continent
  }`);
};

const Page = async () => {
  const destinations = await getDestinations();

  return (
    <div>
      <Header bgImg="/destination.png" text="" title="Destination" />
      <main className="py-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center w-[90%] md:w-[80%] mx-auto my-20 gap-10">
          <div>
            <p className="text-3xl md:text-5xl w-full md:w-auto">
              <span className="font-semibold text-[#FFA500] underline">
                Where do{" "}
              </span>{" "}
              you want to go?{" "}
            </p>
          </div>
          <div className="w-full md:w-[500px]">
            <p className="leading-10">
              Discover curated destinations from our editors — curated stories,
              galleries and travel details to inspire your next trip.
            </p>
          </div>
        </div>
        <DestinationList destinations={destinations} />
        <section className="flex flex-wrap justify-center gap-4 mt-30">
          <Image src="/one.png" alt="" width={208} height={260} />
          <Image src="/two.png" alt="" width={208} height={260} />
          <Image src="/three.png" alt="" width={208} height={260} />
          <Image src="/four.png" alt="" width={208} height={260} />
          <Image src="/five.png" alt="" width={208} height={260} />
          <Image src="/six.png" alt="" width={208} height={260} />
          <Image src="/seven.png" alt="" width={208} height={260} />
        </section>
        <section className="flex flex-col lg:flex-row justify-between items-center my-30 gap-10">
          <div>
            <p className="font-bold text-3xl md:text-4xl w-full lg:w-[500px] text-center lg:text-left">
              Join <span className="text-blue-700 ">98,641</span> Monthly
              Readers. Subscribe Today!
            </p>
          </div>
          <form className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full md:w-80 h-20 border-2 p-4"
            />

            <Button
              label="Subscribe"
              className="rounded-md px-8 py-5 text-white bg-[#0336FF] w-full md:w-auto"
              target=""
            />
          </form>
        </section>
      </main>
    </div>
  );
};

export default Page;
