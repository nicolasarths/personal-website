type Props = { height?: string; width?: string };

const Spacer = ({ height, width }: Props) => {
  const style = { height, width };
  return <div style={style} className="spacer"></div>;
};

export default Spacer;
