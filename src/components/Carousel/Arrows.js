import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LeftArrow = ({prevImage}) => {
  return (
    <span onClick={prevImage} className="carousel-arrow carousel-left-arrow">
      <FontAwesomeIcon icon={faChevronLeft} />
    </span>
  );
};

export const RightArrow = ({nextImage}) => {
  return (
    <span onClick={nextImage} className="carousel-arrow carousel-right-arrow">
      <FontAwesomeIcon icon={faChevronRight} />
    </span>
  );
};