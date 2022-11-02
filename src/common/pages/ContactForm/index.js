import { DeepButton } from "components/Buttons";
import { Field, Submit, TextArea, Form } from "components/forms";
import { subjectOptions, successfulContactPage } from "data/ContactPage";
import { v4 } from "uuid";
import { sendMail } from "utils";
import { WindowAlertContext } from "context/windowAlert";
import { useContext } from "react";
import SendMailFailureAlert from "./SendMailFailureAlert";
import Title from "components/Next/Title";

import Contact from "./Contact";

const SubjectList = () =>
  subjectOptions.map((option) => (
    <DeepButton
      onClick={() => (location.href = `${option.href}`)}
      key={option.id}
    >
      {option.value}
    </DeepButton>
  ));

const ContactForm = ({ whatsapp }) => {
  const { setWindowAlert } = useContext(WindowAlertContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formElements = e.currentTarget.elements;
    const budgetEmailSubject = `Nova Mensagem da Página de Contato #${v4()}`;
    sendMail(
      formElements,
      budgetEmailSubject,
      () => (location.href = successfulContactPage),
      () =>
        setWindowAlert(
          <SendMailFailureAlert
            form={formElements}
            subject={budgetEmailSubject}
          />
        )
    );
  };

  if (whatsapp) return <Contact />;
  else
    return (
      <>
        <Title title="Nícolas Arths - Contato" />
        <div className="contact-form container-small margin-auto padding-bottom-big padding-small">
          <h1>Entre em contato...</h1>

          {/* <SubjectList />
                   <h2 className="contact-form-title">Ou então, deixe sua mensagem:</h2> */}

          <Form form="contactForm" method="post" onSubmit={handleSubmit}>
            <Field
              form="contactForm"
              label="Nome"
              name="Nome"
              type="text"
              placeholder="Seu nome"
              required
            />
            <Field
              form="contactForm"
              label="E-mail"
              name="E-mail"
              type="email"
              placeholder="seu@email.com"
              required
            />
            <TextArea
              form="contactForm"
              label="Mensagem"
              name="Mensagem"
              placeholder="Sua mensagem"
              rows="5"
              required
            />
            <Submit value="Enviar" />
          </Form>
        </div>
      </>
    );
};
export default ContactForm;
