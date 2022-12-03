import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

const parseResponse = async (data) => {
  let response = await mail.send(data);
  if (Array.isArray(response)) {
    response = response[0];
  }
  return response;
};

const handleError = (req, res, error, message) => {
  console.log(error);
  console.log(message);
  res.status(500).json({ status: "Fail" });
};

export default async function handler(req, res) {
  const { subject, text, html } = JSON.parse(req.body);

  const data = {
    to: "nicolasarths.receiver@gmail.com",
    from: "nicolasarths.sender@gmail.com",
    subject,
    text,
    html,
  };

  try {
    let response = await parseResponse(data);
    if (response.statusCode > 199 && response.statusCode < 300)
      res.status(200).json({ status: "Ok" });
    else handleError(req, res, response, "Error without exception");
  } catch (error) {
    handleError(req, res, error, "Error by exception");
  }
}
