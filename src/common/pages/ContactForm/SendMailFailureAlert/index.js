import { formatEmail } from "utils";
import { mailtoConverter } from "utils";

const SendMailFailureAlert = ({ form, subject }) => {
  let fields = formatEmail(form).mailto;
  const href = mailtoConverter(
    "nicolasarths.receiver@gmail.com",
    subject,
    fields
  );
  return (
    <span>
      Falha no envio da mensagem.{" "}
      <a href={href}>Enviar pelo seu aplicativo e-mail preferido?</a>
    </span>
  );
};

export default SendMailFailureAlert;
