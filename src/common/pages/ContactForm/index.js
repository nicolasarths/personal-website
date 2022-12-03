import { Field, Submit, TextArea, Form } from "components/forms";
import { v4 } from "uuid";
import { WindowAlertContext } from "context/windowAlert";
import { useContext } from "react";
import Title from "components/Next/Title";
import handleSubmit from "utils/handleSubmit";

const ContactForm = () => {
  const { setWindowAlert } = useContext(WindowAlertContext);

  const subject = `Mensagem da Página de Contato #${v4()}`;

  return (
    <>
      <Title title="Nícolas Arths - Contato" />
      <div className="contact-form container-small margin-auto padding-bottom-big padding-small">
        <h1>Entre em contato...</h1>

        <Form
          form="contactForm"
          method="post"
          onSubmit={(e) => {
            handleSubmit(e, subject, setWindowAlert);
          }}
        >
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
