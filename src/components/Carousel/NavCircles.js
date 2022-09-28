const NavCircles = ({ ids, onClick, currentId }) => {
  return (
    <div className="carousel-nav-circles-container">
      <div className="carousel-nav-circles-background">
        {ids.map((id) => (
          <span
            style={{ zIndex: 3 }}
            key={id}
            id={`circleForImage${id}`}
            onClick={() => onClick(id)}
            className={
              currentId === id
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
