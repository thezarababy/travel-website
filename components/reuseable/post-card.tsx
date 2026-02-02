import React from "react";
import Image from "next/image";

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
    <article
      className="
        relative w-full max-w-sm overflow-hidden text-left
      "
    >
      <div className="relative w-full aspect-4/3">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute top-15 left-4 right-4 text-white">
        <p className="text-xs opacity-90">
          {date} — {category}
        </p>

        <h2 className="mt-8 text-lg font-bold w-[60%] text-center">{title}</h2>
      </div>
    </article>
  );
};

export default PostCard;
