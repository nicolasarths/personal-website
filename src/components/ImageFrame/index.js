import Image from "next/image";

const ImageFrame = ({ src, alt, style, className }) => {
  if (!style.height) style.height = "500px"
  if (!style.width) style.width = "500px"
  if (!style.backgroundColor) style.backgroundColor = "white"

  return (
    <div className={`image-frame ${className}`} style={style}>
        <Image src={src} alt={alt} layout="fill" />
    </div>
  );
};

export default ImageFrame;
