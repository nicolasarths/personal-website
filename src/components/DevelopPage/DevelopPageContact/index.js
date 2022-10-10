import { Form, Field, Submit, TextArea } from "components/forms";
import { v4 } from "uuid";
import { sendMail, redirectTo } from "utils";
import { successfulContactPage } from "data/hrefs";
import SendMailFailureAlert from "components/ContactPage/SendMailFailureAlert";
import { useContext } from "react";
import { WindowAlertContext } from "context/windowAlert";
import Section from "components/Section/index.js";
import { SquareButton } from "components/Buttons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const DevelopPageContact = () => {
  const { setWindowAlert } = useContext(WindowAlertContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formElements = e.currentTarget.elements;
    const budgetEmailSubject = `Requisição de orçamento ${v4()}`;

    sendMail(
      formElements,
      budgetEmailSubject,
      () => redirectTo(successfulContactPage),
      () => {
        setWindowAlert(
          <SendMailFailureAlert
            form={formElements}
            subject={budgetEmailSubject}
          />
        );
      }
    );
  };

  return (
    <Section name="contatar">
      <div className="contact-container">
        <a
          href="https://wa.me/051984376635"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SquareButton>
            <FontAwesomeIcon icon={faWhatsapp} style={{ height: "26px" }} />
            Envie uma mensagem no whatsapp
          </SquareButton>
        </a>
        <h3 className="normal">ou envie uma mensagem</h3>
        <Form onSubmit={handleSubmit}>
          <Field
            label="Digite seu nome"
            name="name"
            type="text"
            placeholder="Seu Nome"
            required
          />
          <Field
            label="Digite seu e-mail"
            name="email"
            type="email"
            placeholder="seu@email.com"
            required
          />
          <TextArea
            name="message"
            label="E deixe a sua mensagem:"
            placeholder="Vamos nos conhecer?"
            rows="1"
            required
          />
          <Submit />
        </Form>
      </div>
    </Section>
  );
};

export default DevelopPageContact;
