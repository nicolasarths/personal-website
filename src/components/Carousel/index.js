import { useState, useEffect, useCallback } from "react";
import { LeftArrow, RightArrow } from "./Arrows";
import NavCircles from "./NavCircles";
import CarouselImages from "./CarouselImages";

const Carousel = ({ images, className, ...props }) => {
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
      <LeftArrow prevImage={prevImage} />

      <CarouselImages
        key={images[currentImageIndex].id}
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt}
      />

      <NavCircles
        ids={images.map(({ id }) => id)}
        currentId={currentImageIndex}
        onClick={setCurrentImageIndex}
      />

      <RightArrow nextImage={nextImage} />
    </div>
  );
};

export default Carousel;
