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
    lang === "en"
      ? "Internal server error, it might be a good idea to "
      : "Ocorreu algum problema no servidor, talvez seja melhor ";
  const alternative =
    lang === "en"
      ? "try again with your favorite app "
      : "tentar novamente pelo seu aplicativo de e-mail preferido ";

  const continuation =
    lang === "en"
      ? "to ensure your message is delivered."
      : "para garantir que sua mensagem seja entregue.";
  return (
    <span>
      {failureMessage}
      <a href={href}>{alternative}</a>
      {continuation}
    </span>
  );
};

export default SendMailFailureAlert;
