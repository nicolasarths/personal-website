import Button from "../Button";

const FadeInButton = ({ children, ...props}) => {
  return (
    <Button
      {...props}
      type="fadeIn"
    >
      {children}
    </Button>
  );
};

export default FadeInButton;
