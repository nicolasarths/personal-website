import Image from "next/image";

const CarouselImages = ({ id, src, alt }) => {
  return (
    <Image
      key={id}
      src={src}
      alt={alt}
      layout="fill"
    />
  );
};

export default CarouselImages;