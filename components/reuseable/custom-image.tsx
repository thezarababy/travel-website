"use client";

import Image, { ImageProps, StaticImageData } from "next/image";

type Props = ImageProps & {
  src: string | StaticImageData;
};

export default function CustomImage(props: Props) {
  return (
    <Image
      {...props}
      placeholder={typeof props.src === "string" ? undefined : "blur"}
    />
  );
}