import { ReactNode } from "react";
import styles from "./TextAndImage.module.sass";

interface TextAndImageProps {
  text: () => ReactNode;
  image: () => ReactNode;
  alternate?: boolean;
}

const TextAndImage = ({ text, image, alternate }: TextAndImageProps) => {
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
