import formatEmail from "./formatEmail";

const sendFormToMyMail = async (form, receivedSubject) => {
  const { subject, body, html } = formatEmail(form, receivedSubject);
  const response = await fetch("/api/mail", {
    method: "post",
    body: JSON.stringify({
      subject,
      body,
      html,
    }),
  });

  if (response.status > 199 && response.status < 300) return true;
  return false;
};

export const sendMail = async (
  currentTargetElements,
  emailSubject,
  functionToBeCalledIfSuccess,
  functionToBeCalledIfFailure
) => {
  const successfullySent = await sendFormToMyMail(
    currentTargetElements,
    emailSubject
  );
  if (successfullySent) functionToBeCalledIfSuccess();
  else if (functionToBeCalledIfFailure) functionToBeCalledIfFailure();
};
