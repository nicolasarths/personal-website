import { useState, useEffect, useCallback } from "react";
import { LeftArrow, RightArrow } from "./Arrows";
import NavCircles from "./NavCircles";
import CarouselImages, { CarouselImagesProps } from "./CarouselImages";

type CarouselProps = {
  images: CarouselImagesProps[];
  className?: string;
};

const Carousel = ({ images, className, ...props }: CarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => {
      console.log("Current", prev);
      const nextIndex = prev + 1;
      console.log("Next", nextIndex);
      if (nextIndex > images.length - 1) return 0;
      return nextIndex;
    });
  }, [images]);

  const prevImage = () => {
    setCurrentImageIndex((prev) => {
      if (prev === 0) return images.length - 1;
      return prev - 1;
    });
  };

  useEffect(() => {
    setInterval(() => {
      nextImage();
    }, 7000);
  }, [nextImage]);

  return (
    <div className={"carousel " + (className ? className : "")} {...props}>
      <LeftArrow nextIndex={prevImage} />

      <CarouselImages
        key={images[currentImageIndex].index}
        index={images[currentImageIndex].index}
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt}
      />

      <NavCircles
        indexes={images.map(({ index }) => index)}
        currentIndex={currentImageIndex}
        onClick={setCurrentImageIndex}
      />

      <RightArrow nextIndex={nextImage} />
    </div>
  );
};

export default Carousel;
