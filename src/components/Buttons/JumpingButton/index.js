import Button from "../Button";

const JumpingButton = ({ children, ...props }) => {
  return (
    <Button
      type="trembler"
      {...props}
    >
      {children}
    </Button>
  );
};

export default JumpingButton;
