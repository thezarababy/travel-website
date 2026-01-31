import React from "react";

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
    <article className="w-[70%] bg-white rounded-md overflow-hidden shadow-md">
      <div className="relative max-w-[783px] w-full aspect-video">
        <img src={image} alt={title} className=" w-full h-full object-cover" />
      </div>

      <div className="p-4 space-y-4">
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span className="block w-0.75 h-6 bg-orange-400" />
          <span>
            {date} – {category}
          </span>
        </div>

        <h3 className="text-lg font-semibold leading-snug">{title}</h3>

        {exerpt && (
          <p className="text-sm text-gray-600 leading-relaxed">{exerpt}</p>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
          <div className="flex items-center gap-2">
            <img src="/location.png" alt="" className="w-4 h-4" />
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-2">
            <img src="/comment.png" alt="" className="w-4 h-4" />
            <span>({commentsCount})</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DestinationCard;
