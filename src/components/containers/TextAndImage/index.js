const TextAndImage = ({ text, image, alternate }) => {
  if (!alternate)
    return (
      <div className="text-and-image">
        <div className="text-and-image-text">{text()}</div>
        <div className="text-and-image-image">{image()}</div>
      </div>
    );
  else
    return (
      <div className="text-and-image">
        <div className="text-and-image-image">{image()}</div>
        <div className="text-and-image-text text-right">{text()}</div>
      </div>
    );
};

export default TextAndImage;