import { Button } from "components/Buttons";
import { hrefs } from "data";
import Link from "next/link";
import Title from "components/Next/Title";

import styles from "./ContactSuccess.module.sass";

const ContactSuccess = () => (
  <>
    <Title title="Nícolas Arths - Your message has been delievered" />
    <div className={styles.container}>
      <h1>Your message has been delievered.</h1>
      <p>Thank you for your contact.</p>
      <Link href={hrefs.EN_PAGE}>
        <Button type="square">Get back to the homepage</Button>
      </Link>
    </div>
  </>
);

export default ContactSuccess;
