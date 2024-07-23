const nodemailer = require("nodemailer");

async function sendMail(email, verifyToken) {
  const Transport = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "BVT BaaS",
    to: email,
    subject: "Email Verification",
    html: `Click <a href="${process.env.SERVER_HOST}/verify/${verifyToken}">Here</a> to verify your email.`,
  };

  try {
    await Transport.sendMail(mailOptions);
    console.log("Verification Email Sent");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Rethrow error to be caught in the handler
  }
}

module.exports = { sendMail };
