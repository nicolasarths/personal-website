import {Button} from "components/Buttons"

import styles from "./ContactSuccess.module.sass"

const ContactSuccess = () => <div className={styles.container}>
    <h1>Your message has been delievered.</h1>
    <p>Thank you for your contact.</p>
    <Button type="square">Get back to the homepage</Button>
</div>

export default ContactSuccess