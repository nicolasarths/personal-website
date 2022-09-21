import Option from "../Buttons/Option";

const MenuOfButtons = ({options}) => {
  return (
    <div className="full-width">
      {options.map(({ href, text }) => (
        <Option key={text} href={href}> {text} </Option>
      ))}
    </div>
  );
};

export default MenuOfButtons;