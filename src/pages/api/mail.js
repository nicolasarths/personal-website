import mail from "@sendgrid/mail"

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  const { subject, text, html } = JSON.parse(req.body)

  const data = {
    to: 'nicolasarths.receiver@gmail.com',
    from: 'nicolasarths.sender@gmail.com',
    subject,
    text,
    html
  }

  try {
    const response = await mail.send(data)
    if (response.statusCode > 300) res.status(500).json({ status: 'Fail'})
    else res.status(200).json({ status: 'Ok' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'Fail' })
  }
}