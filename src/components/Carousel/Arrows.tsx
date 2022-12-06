import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ArrowProp = {
  nextIndex: () => void;
};

export const LeftArrow = ({ nextIndex }: ArrowProp) => {
  return (
    <span onClick={nextIndex} className="carousel-arrow carousel-left-arrow">
      <FontAwesomeIcon icon={faChevronLeft} />
    </span>
  );
};

export const RightArrow = ({ nextIndex }: ArrowProp) => {
  return (
    <span onClick={nextIndex} className="carousel-arrow carousel-right-arrow">
      <FontAwesomeIcon icon={faChevronRight} />
    </span>
  );
};
