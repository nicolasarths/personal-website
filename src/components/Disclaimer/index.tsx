import { ReactNode } from "react";
import styles from "./Disclaimer.module.sass";

interface DisclaimerProps {
  className: string;
  text: ReactNode | string;
}

const Disclaimer = ({ className, text }: DisclaimerProps) => {
  return (
    <div className={styles.disclaimer + (className ? " " + className : "")}>
      {text}
    </div>
  );
};

export default Disclaimer;
