import Img from "components/Img";
import { StaticImageData } from "next/image";

export interface CarouselImagesProps {
  index: number;
  src: string | StaticImageData;
  alt: string;
}

const CarouselImages = ({ index, src, alt }: CarouselImagesProps) => {
  return <Img key={index} src={src} alt={alt} />;
};

export default CarouselImages;
