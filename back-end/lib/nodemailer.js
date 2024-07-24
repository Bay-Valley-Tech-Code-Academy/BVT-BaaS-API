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
    subject: "Multifactor Authentication Code",
    html: `Your MFA Code is: ${verifyToken}`,
  };

  try {
    await Transport.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; 
  }
}

module.exports = { sendMail };
