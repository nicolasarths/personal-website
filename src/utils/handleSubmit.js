import { successfulContactPage } from "data/ContactPage";

import { sendMail } from "utils";

import SendMailFailureAlert from "./SendMailFailureAlert";

const handleSubmit = (e, subject, setWindowAlert) => {
  e.preventDefault();
  const formElements = e.currentTarget.elements;
  sendMail(
    formElements,
    subject,
    () => (location.href = successfulContactPage),
    () =>
      setWindowAlert(
        <SendMailFailureAlert form={formElements} subject={subject} />
      )
  );
};

export default handleSubmit;
