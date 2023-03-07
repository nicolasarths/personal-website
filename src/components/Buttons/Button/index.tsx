import { PropsWithoutRef, ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./Buttons.module.sass";

type acceptedTypes =
  | "square"
  | "jumper"
  | "deep"
  | "colorChanger"
  | "fadeIn"
  | "trembler";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  type?: acceptedTypes;
  style?: React.CSSProperties;
  onClick?: () => any;
  props?: PropsWithoutRef<any> & ComponentPropsWithoutRef<any>;
}

const Button = ({ children, className, type, ...props }: ButtonProps) => {
  const acceptedTypes = [
    "square",
    "jumper",
    "deep",
    "colorChanger",
    "fadeIn",
    "trembler",
  ];
  const arrayOfClasses = ["button"];

  if (type) acceptedTypes.includes(type) ? arrayOfClasses.push(type) : 0;

  const stringOfModularClasses = arrayOfClasses
    .map((cls) => `${styles[cls]} `)
    .join("");

  const getClasses = className
    ? className + " " + stringOfModularClasses
    : stringOfModularClasses;

  return (
    <button className={getClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
