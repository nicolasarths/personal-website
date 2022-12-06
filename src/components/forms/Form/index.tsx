import FormProps from "../FormProps";

const Form = ({ name, method, onSubmit, children }: FormProps) => {
  return (
    <form
      className="container-small"
      onSubmit={onSubmit}
      method={method}
      id={name}
      name={name}
    >
      {children}
    </form>
  );
};

export default Form;
