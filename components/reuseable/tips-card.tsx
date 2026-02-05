import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  title: string;
  date: string;
  exerpt: string;
  category?: string;
  location: string;
  commentsCount?: number;
  rates?: number;
  slug: string;
};

const TipsCard: React.FC<Props> = ({
  image,
  title,
  date,
  exerpt,
  category = "Travel Tips",
  location,
  commentsCount = 0,
  rates = 0,
  slug,
}) => {
  return (
    <Link href={`/tips/${slug}`}>
      <article className="bg-white  rounded-md shadow-md w-full h-full text-left cursor-pointer hover:shadow-lg transition-shadow ">
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

          <h3 className="text-2xl font-semibold bg-[#0336FF] text-white w-full my-5 p-2">
            {title}
          </h3>

          {exerpt && (
            <p className="text-sm text-gray-600 mb-5 w-[80%]">{exerpt}</p>
          )}

          <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
            <div className="flex items-center gap-2">
              <Image
                src="/location.png"
                alt="location"
                width={16}
                height={16}
              />
              <span>{location}</span>
            </div>

            <div className="flex items-center gap-2">
              <Image src="/comment.png" alt="comments" width={16} height={16} />
              <span>({commentsCount})</span>
            </div>
            <div>
              <Image src="/star.png" alt="rating" width={16} height={16} />
              <span>{rates}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default TipsCard;
