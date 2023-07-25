import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "components/Buttons";
import { ReactNode } from "react";
import { hrefs } from "data";

import styles from "./WhatsappButton.module.sass";

type Props = {
  children: ReactNode;
};

const WhatsappButton = ({ children }: Props) => (
  <a href={hrefs.WHATSAPP_BASE} target="_blank" rel="noopener noreferrer">
    <Button type="square" className={styles.whatsappButton}>
      <FontAwesomeIcon icon={faWhatsapp} style={{ height: "26px" }} />
      {children}
    </Button>
  </a>
);
export default WhatsappButton;
