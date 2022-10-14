import styles from "./Section.module.sass"

const Section = ({ color, textColor, children, ...props }) => {
  return (
    <section
      className={styles.section}
      style={{
        color: textColor ? textColor : undefined,
        backgroundColor: color ? color : undefined,
        ...props.style
      }}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
