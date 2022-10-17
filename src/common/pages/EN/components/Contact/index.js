import { Form, Field, Submit, TextArea } from "components/forms";
import { v4 } from "uuid";
import { sendMail, redirectTo } from "utils";
import { hrefs } from "data";
import SendMailFailureAlert from "common/pages/ContactForm/SendMailFailureAlert";
import { useContext } from "react";
import { WindowAlertContext } from "context/windowAlert";
import Section from "components/Section/index.js";
import { SquareButton } from "components/Buttons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spacer from "components/Spacer";
import styles from "./Contact.module.sass";

const Contact = () => {
  const { setWindowAlert } = useContext(WindowAlertContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formElements = e.currentTarget.elements;
    const budgetEmailSubject = `Requisição de orçamento ${v4()}`;

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
        <TextArea
          name="message"
          label="Your message"
          placeholder="Let's talk?"
          rows="5"
          required
        />
        <Submit value="Send" />
      </Form>
    </div>
  );
};

export default Contact;
