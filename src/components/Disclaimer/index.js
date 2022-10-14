import styles from "./Disclaimer.module.sass"

const Disclaimer = ({ className, text, ...props }) => {
  return (
    <div className={styles.disclaimer + (className ? " " + className : "")} {...props}>
      <h4>{text}</h4>
    </div>
  );
};

export default Disclaimer;
