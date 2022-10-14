import { Button } from "components/Buttons";
import styles from "./MenuOfButtons.module.sass"
import { Fragment } from "react"

const MenuOfButtons = ({ options, className, ...props }) => {
  return (
    <div className={styles.container + (className ? className : "")} {...props}>
      {options.map(({ href, text, snippet }) => (
        <Fragment key={text}>
          {snippet ? <span>{snippet}</span> : ""}
          <Button onClick={()=> location.href = href}>
            {text}
          </Button>
        </Fragment>
      ))}
    </div>
  );
};

export default MenuOfButtons;
