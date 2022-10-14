import styles from "./Buttons.module.sass";

const Button = ({ children, className, type, ...props }) => {
  const acceptedTypes = [
    "square",
    "jumper",
    "deep",
    "colorChanger",
    "fadeIn",
    "trembler"
  ];
  const arrayOfClasses = ["button"];

  acceptedTypes.includes(type) ? arrayOfClasses.push(type) : 0;

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
