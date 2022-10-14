import Button from "../Button";

const TremblingButton = ({ children, ...props }) => {
  return (
    <Button className="button trembling" {...props}>
      {children}
    </Button>
  );
};

export default TremblingButton;
