import styles from "./Paper.module.sass";

const Paper = ({ className, children, ...props }) => {
  const getClasses = styles.paper + " " + className;

  return (
    <div className={getClasses} {...props}>
      {children}
    </div>
  );
};

export default Paper;
