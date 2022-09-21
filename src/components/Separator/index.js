const Separator = ({ color, height, width }) => {
  const style = {
    backgroundColor: color,
    height: "2px",
    width: width ? width : "90%",
    marginTop: `calc(${height}/2)`,
    marginBottom: `calc(${height}/2)`
  }

  return <div style={style}></div>;
};

export default Separator;
