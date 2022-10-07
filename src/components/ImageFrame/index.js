import Image from "next/image";

const ImageFrame = ({ src, alt, style, className, objectFit, objectPosition }) => {
  if (!style) style = {};
  if (!style.height) style.maxHeight = "500px";
  if (!style.width) style.maxWidth = "500px";

  return (
    <div className={`image-frame ${className}`} style={style}>
      <Image src={src} alt={alt} layout="fill" objectFit={objectFit} objectPosition={objectPosition}/>
    </div>
  );
};

export default ImageFrame;
