import Image from "next/image";

const SvgContainer = ({icon}) => (
  <div className="svg-container icon">
    <Image src={icon} alt="SVG icon" layout="fill" />
  </div>
);

export default SvgContainer;