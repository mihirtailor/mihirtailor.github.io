const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const tranporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

app.post("/sendemail/", async (request, response) => {
  const { name, email, subject, message } = request.body;

  try {
    const result = await tranporter.sendMail({
      from: "maddison53@ethereal.email",
      to: "focustaylor99@gmail.com", // Your email from the component
      subject: `Contact from ${name}: ${subject}`,
      text: `From: ${name} (${email})\n\nMessage: ${message}`,
    });

    return response.json({
      success: true,
      messageId: result.messageId,
    });
  } catch (errors) {
    return response.status(400).json({
      success: false,
      error: errors.message,
    });
  }
});

app.listen(4000, () => {
  console.log("Server is running");
});
