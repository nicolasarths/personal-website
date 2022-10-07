import { Form, Field, Submit, TextArea } from "components/forms";
import { v4 } from "uuid";
import { sendMail, redirectTo } from "utils";
import { successfulContactPage } from "data/hrefs";
import SendMailFailureAlert from "components/ContactPage/SendMailFailureAlert";
import { useContext } from "react";
import { WindowAlertContext } from "context/windowAlert";
import Section from "components/Section/index.js";


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
        console.log("failure");
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
      <div className="padding-small container-medium margin-auto">
        <h2 className="size-32">Contatar</h2>
        <Form onSubmit={handleSubmit}>
          <Field
            label="Indique o seu nome"
            name="name"
            type="text"
            placeholder="Digite seu nome"
            required
          />
          <Field
            label="E-mail"
            name="email"
            type="email"
            placeholder="Insira seu contato"
            required
          />
          <Field
            label="Telefone (opcional)"
            name="tel"
            type="tel"
            placeholder="(99) 9 9999-9999"
          />
          <TextArea
            name="message"
            label="E deixe a sua mensagem:"
            placeholder="Mensagem"
            rows="5"
            required
          />
          <Submit />
        </Form>
      </div>
    </Section>
  );
};

export default DevelopPageContact;