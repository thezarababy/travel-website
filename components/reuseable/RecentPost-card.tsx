import React from "react";

type RecentPostCardProps = {
  image: string;
  title: string;
  date: string;
  category?: string;
};

const RecentPostCard: React.FC<RecentPostCardProps> = ({
  image,
  title,
  date,
  category = "Tips & Tricks",
}) => {
  return (
    <div
      className="
        flex gap-4 rounded-xl bg-white p-3
        shadow-[0_10px_25px_rgba(0,0,0,0.08)]
        transition-all duration-300 hover:-translate-y-0.5
        hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]
      "
    >
      <img
        src={image}
        alt={title}
        className="h-16 w-16 rounded-lg object-cover shrink-0"
      />

      <div className="flex flex-col justify-center">
        <p className="text-xs text-gray-500">
          {date} — {category}
        </p>

        <h3 className="text-sm font-semibold leading-snug">{title}</h3>
      </div>
    </div>
  );
};

export default RecentPostCard;
