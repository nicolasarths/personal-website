const Section = ({ color, children }) => {
  return (
    <section
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
