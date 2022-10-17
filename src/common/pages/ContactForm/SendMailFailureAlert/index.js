import { formatEmail } from "utils";
import { mailtoConverter } from "utils";

const SendMailFailureAlert = ({ lang, form, subject }) => {
  let fields = formatEmail(form).mailto;
  const href = mailtoConverter(
    "nicolasarths.receiver@gmail.com",
    subject,
    fields
  );

  const failureMessage =
    lang === "en" ? "Failed to send message. " : "Falha no envio da mensagem.";
  const alternative =
    lang === "en"
      ? "Send with your favorite app?"
      : "Enviar pelo seu aplicativo e-mail preferido?";

  return (
    <span>
      {failureMessage}
      <a href={href}>{alternative}</a>
    </span>
  );
};

export default SendMailFailureAlert;
