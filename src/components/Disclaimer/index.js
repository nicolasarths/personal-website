import styles from "./Disclaimer.module.sass"

const Disclaimer = ({ className, text, ...props }) => {
  return (
    <div className={styles.disclaimer + (className ? " " + className : "")} {...props}>
      {text}
    </div>
  );
};

export default Disclaimer;
