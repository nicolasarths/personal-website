const Section = ({ name, color, children }) => {
  return (
    <section
      id={name}
      name={name}
      style={{
        backgroundColor: color ? color : "var(--background-color)",
        width: "100%",
      }}
    >
      {children}
    </section>
  );
};

export default Section;
