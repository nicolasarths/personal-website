import { Button } from "components/Buttons";
import styles from "./MenuOfButtons.module.sass"

const MenuOfButtons = ({ options, className, ...props }) => {
  return (
    <div className={styles.container + (className ? className : "")} {...props}>
      {options.map(({ href, text, snippet }) => (
        <>
          {snippet ? <span>{snippet}</span> : ""}
          <Button key={text} onClick={()=> location.href = href}>
            {text}
          </Button>
        </>
      ))}
    </div>
  );
};

export default MenuOfButtons;
