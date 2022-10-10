const Section = ({ name, color, textColor, children }) => {
  return (
    <section
      id={name}
      name={name}
      style={{
        color: textColor ? textColor : undefined,
        backgroundColor: color ? color : "var(--background-color)",
        width: "100%",
      }}
    >
      {children}
    </section>
  );
};

export default Section;
