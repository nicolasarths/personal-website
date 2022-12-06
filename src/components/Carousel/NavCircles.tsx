type NavCirclesProps = {
  indexes: number[];
  onClick: (index: number) => void;
  currentIndex: number;
};

const NavCircles = ({ indexes, onClick, currentIndex }: NavCirclesProps) => {
  return (
    <div className="carousel-nav-circles-container">
      <div className="carousel-nav-circles-background">
        {indexes.map((index) => (
          <span
            style={{ zIndex: 3 }}
            key={index}
            id={`circleForImage${index}`}
            onClick={() => onClick(index)}
            className={
              currentIndex === index
                ? "carousel-nav-circles active"
                : "carousel-nav-circles"
            }
          ></span>
        ))}
      </div>
    </div>
  );
};

export default NavCircles;
