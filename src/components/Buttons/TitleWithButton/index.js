const TitleWithButton = ({ title, button }) => {
  return (
    <div className="title-with-button-container">
      <span className="title-with-button-title">{title}</span>
      <span className="title-with-button-button">{button}</span>
    </div>
  );
};

export default TitleWithButton;