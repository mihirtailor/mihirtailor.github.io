const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
app.use(express.json());

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
  // write a code for make to, subject and text values to be inserted from the request
  const { email, subject, message } = request.body;

  try {
    const result = await tranporter.sendMail({
      email: email,
      subject: subject,
      message: message,
    });

    return response.json(result);
  } catch (errors) {
    return response.status("400").json(errors);
  }
});

app.listen(4000, () => {
  console.log("Server is running");
});
