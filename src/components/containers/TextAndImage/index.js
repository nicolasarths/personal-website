import styles from "./TextAndImage.module.sass"

const TextAndImage = ({ text, image, alternate }) => {
  if (!alternate)
    return (
      <div className={styles.container}>
        <div className={styles.text}>{text()}</div>
        <div className={styles.image}>{image()}</div>
      </div>
    );
  else
    return (
      <div className={styles.container}>
        <div className={styles.image}>{image()}</div>
        <div className={styles.text + " " + styles.right}>{text()}</div>
      </div>
    );
};

export default TextAndImage;