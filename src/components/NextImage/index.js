import Image from "next/image";

const NextImage = ({src, alt}) => {
  return (
    <div className="next-image">
      <Image src={src} alt={alt} layout="fill" />
    </div>
  );
};

export default NextImage;
