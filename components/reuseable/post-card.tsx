import React from "react";

type PostCardProps = {
  image: string;
  title: string;
  date: string;
  category?: string;
};

const PostCard: React.FC<PostCardProps> = ({
  image,
  title,
  date,
  category = "Tips & Tricks",
}) => {
  return (
    <div
      className="
        relative w-full max-w-sm overflow-hidden  bg-white
        shadow-[0_20px_40px_rgba(0,0,0,0.12)]
        transition-all duration-300 hover:-translate-y-1
        hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]
      "
    >
      <img src={image} alt={title} className="h-56 w-111.25  object-cover" />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute bottom-4 left-4 right-4 text-white">
        <p className="text-xs opacity-90">
          {date} — {category}
        </p>

        <h2 className="mt-2 text-lg font-bold leading-snug">{title}</h2>
      </div>
    </div>
  );
};

export default PostCard;
