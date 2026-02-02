import React from "react";
import Image from "next/image";

type DestinationCardProps = {
  image: string;
  title: string;
  date: string;
  exerpt: string;
  category?: string;
  location: string;
  commentsCount?: number;
};

const DestinationCard: React.FC<DestinationCardProps> = ({
  image,
  title,
  date,
  exerpt,
  category = "Tips & Tricks",
  location,
  commentsCount = 0,
}) => {
  return (
    <article className="bg-white shadow-md w-full h-full text-left">
      <div className="relative w-full h-70  overflow-hidden shrink-0">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className=" h-60 px-4 pb-4 ">
        <div className="flex items-center gap-3 text-sm mt-4 text-gray-500">
          <span className="block w-0.75 h-6 bg-orange-400" />
          <span className="">
            {date} – {category}
          </span>
        </div>

        <h3 className="text-2xl font-semibold  w-[80%] my-5">{title}</h3>

        {exerpt && (
          <p className="text-sm text-gray-600 mb-5 w-[80%]">{exerpt}</p>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
          <div className="flex items-center gap-2">
            <Image src="/location.png" alt="location" width={16} height={16} />
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Image src="/comment.png" alt="comments" width={16} height={16} />
            <span>({commentsCount})</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DestinationCard;
