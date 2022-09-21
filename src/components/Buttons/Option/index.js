import Button from "../Button";

const Option = ({href, children}) => {
  return (
    <Button onClick={() => (location.href = href)}>
      {children}
    </Button>
  );
};

export default Option;
