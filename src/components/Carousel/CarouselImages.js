import Img from "components/Img";

const CarouselImages = ({ id, src, alt }) => {
  return (
    <Img
      key={id}
      src={src}
      alt={alt}
    />
  );
};

export default CarouselImages;