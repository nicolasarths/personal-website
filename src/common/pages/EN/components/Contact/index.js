import { Form, Field, Submit, TextArea } from "components/forms";
import { v4 } from "uuid";
import { sendMail, redirectTo } from "utils";
import { hrefs } from "data";
import SendMailFailureAlert from "utils/SendMailFailureAlert";
import { useContext } from "react";
import { WindowAlertContext } from "context/windowAlert";
import styles from "./Contact.module.sass";

const Contact = () => {
  const { setWindowAlert } = useContext(WindowAlertContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formElements = e.currentTarget.elements;
    const budgetEmailSubject = `Message from the international landing page ${v4()}`;

    sendMail(
      formElements,
      budgetEmailSubject,
      () => redirectTo(hrefs.EN_SUCCESSFUL_CONTACT_PAGE),
      () => {
        setWindowAlert(
          <SendMailFailureAlert
            lang="en"
            form={formElements}
            subject={budgetEmailSubject}
          />
        );
      }
    );
  };

  return (
    <div id="contact" className={styles.container}>
      <h2>Get in touch</h2>
      <Form onSubmit={handleSubmit}>
        <Field
          label="Your name"
          name="name"
          type="text"
          placeholder="Your Name"
          required
        />
        <Field
          label="Your email"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
        />
        <div className={styles.right}>
          <TextArea
            name="message"
            label="Your message"
            placeholder="Let's talk?"
            rows="5"
            required
          />
        </div>
        <Submit className={styles.submit} value="Send" lang="en" />
      </Form>
    </div>
  );
};

export default Contact;
