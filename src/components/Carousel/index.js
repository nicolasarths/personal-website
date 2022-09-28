import { useState, useEffect, useCallback } from "react";
import { LeftArrow, RightArrow } from "./Arrows";
import NavCircles from "./NavCircles";
import CarouselImages from "./CarouselImages";

const Carousel = ({ images }) => {
  const [currentImageId, setCurrentImageId] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageId((prev) => {
      const nextId = prev + 1;
      if (nextId === images.length) return 0;
      return nextId;
    });
  }, [images]);

  const prevImage = () => {
    setCurrentImageId((prev) => {
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
    <div className="carousel">
      <LeftArrow prevImage={prevImage} />

      <CarouselImages
        key={images[currentImageId].id}
        src={images[currentImageId].src}
        alt={images[currentImageId].alt}
      />

      <NavCircles
        ids={images.map(({ id }) => id)}
        currentId={currentImageId}
        onClick={setCurrentImageId}
      />

      <RightArrow nextImage={nextImage} />
    </div>
  );
};

export default Carousel;
