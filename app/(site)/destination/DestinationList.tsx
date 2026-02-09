"use client";

import { useState } from "react";
import DestinationCard from "@/components/reuseable/destination-card";
import { urlFor } from "@/sanity/lib/image";

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

const DestinationList = ({ destinations }: { destinations: Destination[] }) => {
  const [activeTab, setActiveTab] = useState("All");

  const continents = [
    "All",
    "South America",
    "North America",
    "Europe",
    "Africa",
    "Asia",
  ];

  const filteredDestinations =
    activeTab === "All"
      ? destinations
      : destinations.filter((dest) => dest.continent === activeTab);

  return (
    <>
      <div className="flex flex-wrap justify-center border border-gray-300 rounded mb-10 overflow-hidden w-fit mx-auto">
        {continents.map((continent) => (
          <button
            key={continent}
            onClick={() => setActiveTab(continent)}
            className={`px-6 py-3 text-sm font-medium transition-colors border-r last:border-r-0 border-gray-300 ${
              activeTab === continent
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {continent}
          </button>
        ))}
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDestinations.map((item) => (
          <DestinationCard
            key={item._id}
            image={item.image ? urlFor(item.image).url() : null}
            title={item.title}
            date={new Date(item.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            exerpt={item.excerpt}
            category={item.continent || "Travel"}
            location={item.continent || "Unknown"}
            commentsCount={item.commentCount || 0}
            slug={item.slug.current}
          />
        ))}
      </section>
    </>
  );
};

export default DestinationList;
