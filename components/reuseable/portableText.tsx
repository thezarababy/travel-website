import React from "react";
import Image from "next/image";
import { PortableText as PT } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  value: any;
};

const components = {
  types: {
    image: ({ value }: any) => {
      if (!value) return null;
      const src = urlFor(value).url();
      return (
        <div className="my-6">
          <Image
            src={src}
            alt={value.alt || "image"}
            width={1200}
            height={700}
            className="object-cover rounded"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-semibold my-3">{children}</h2>
    ),
    normal: ({ children }: any) => (
      <p className="text-base leading-7 my-2">{children}</p>
    ),
  },
};

const PortableText: React.FC<Props> = ({ value }) => {
  if (!value) return null;
  return <PT value={value} components={components as any} />;
};

export default PortableText;
