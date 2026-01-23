import React from "react";

type DestinationCardProps = {
  image: string;
  title: string;
  date: string;
  category?: string;
  location: string;
  commentsCount?: number;
};

const DestinationCard: React.FC<DestinationCardProps> = ({
  image,
  title,
  date,
  category = "Tips & Tricks",
  location,
  commentsCount = 0,
}) => {
  return (
    <article className="w-full max-w-sm bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-48 w-full">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className="p-4 space-y-3">
        <img
          src="/rectangle.png"
          alt="rectangle"
          className="w-[2.89px] h-[23.6px]"
        />
        <p className="text-sm text-gray-500">
          {date} – {category}
        </p>

        <h3 className="text-lg font-semibold leading-snug">{title}</h3>

        <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
          <div>
            <img
              src="/location.png"
              alt="Location"
              className="w-[18.75px] h-6.5"
            />
            <span className="flex items-center gap-1">{location}</span>
          </div>

          <div>
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
