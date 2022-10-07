import { v4 } from "uuid";

const formatEmail = (form, subject) => {
  let html = "";
  let body = "";
  let mailto = "";

  Array.from(form).forEach((field) => {
    if (!field.name) return;
    body += `${field.name}: ${field.value}; `;
    html += `<strong>${field.name}</strong>: ${field.value} <br/>`;
    mailto += `${field.value};%0D%0A`;
  });

  return {
    subject: subject ? subject : `Mensagem #${v4()}`,
    body,
    html,
    mailto,
  };
};

export default formatEmail;
