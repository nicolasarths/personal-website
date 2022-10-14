import Button from "../Button";

const SquareButton = ({ children, ...props }) => {
  return (
    <Button {...props} type="square">
      {children}
    </Button>
  );
};

export default SquareButton;
