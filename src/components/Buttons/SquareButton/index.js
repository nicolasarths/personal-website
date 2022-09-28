const SquareButton = ({href, children, style}) => {
  return <button className="button" style={{
    borderRadius: "0",
    ...style
  }} onClick={() => location.href = href}>{children}</button>
};

export default SquareButton;