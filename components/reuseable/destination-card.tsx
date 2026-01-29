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
    <article className="w-full  bg-white rounded-md overflow-hidden shadow-md mb-10">
      <div className="h-48 w-full">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className="p-4 space-y-3 h-70">
        <div className="flex items-center gap-3 ">
          <img
            src="/rectangle.png"
            alt="rectangle"
            className="w-[2.89px] h-[23.6px]"
          />
          <p className="text-sm text-gray-500">
            {date} – {category}
          </p>
        </div>

        <h3 className="text-lg font-semibold leading-snug pt-10 ">{title}</h3>
        <p className=" text-sm w-130 pt-10">{exerpt}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
          <div className="flex gap-3 items-center">
            <img
              src="/location.png"
              alt="Location"
              className="w-[18.75px] h-6.5"
            />
            <span className="flex items-center gap-3">{location}</span>
          </div>

          <div className="flex items-center gap-3">
            <img src="/comment.png" alt="Comments" className="w-5.75 h-4" />
            <span className="flex items-center gap-1">
              Comment ({commentsCount})
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DestinationCard;
