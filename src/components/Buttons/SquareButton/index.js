const SquareButton = ({onClick, children, style}) => {
  return <button className="button" style={{
    borderRadius: "0",
    ...style
  }} onClick={onClick}>{children}</button>
};

export default SquareButton;