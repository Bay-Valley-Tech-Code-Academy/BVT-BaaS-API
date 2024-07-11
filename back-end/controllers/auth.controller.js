const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, VERIFICATION_SID } = process.env;
const twilio = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

async function authHandler(req, res) {
  return res.status(200).json({
    success: false,
    data: {
      refreshToken: req.token,
      user: { id: req.user.id, email: req.user.email },
    },
  });
}

async function mfaHandler(req, res) {
  let verificationRequest;
  try {
    verificationRequest = await twilio.verify.v2
      .services(VERIFICATION_SID)
      .verifications.create({
        channel: "sms",
        to: "+12097774479",
      });

    console.log(verificationRequest.status);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
}

module.exports = { authHandler, mfaHandler };
