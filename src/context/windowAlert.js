import { createContext, useState } from "react";
import { useContext } from "react";

const WindowAlert = ({ alert }) => {
  const { windowAlert, setWindowAlert } = useContext(WindowAlertContext);
  if (alert) {
    setTimeout(() => setWindowAlert(undefined), 20000);
    return (
      <div className="window-alert">
        <span className="window-alert-alert">{alert}</span>
        <span
          onClick={() => setWindowAlert(undefined)}
          className="absolute right padding-x-small bold"
        >
          x
        </span>
      </div>
    );
  } else return;
};

export const WindowAlertContext = createContext();

export const WindowAlertProvider = ({ children }) => {
  const [windowAlert, setWindowAlert] = useState(undefined);
  
  return (
    <WindowAlertContext.Provider value={{ windowAlert, setWindowAlert }}>
      <WindowAlert alert={windowAlert} />
      {children}
    </WindowAlertContext.Provider>
  );
};
