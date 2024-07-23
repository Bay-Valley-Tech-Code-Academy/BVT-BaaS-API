const { object, string, number, nativeEnum, boolean } = require("zod");

const headers = {
  headers: object({
    api_key: string({ required_error: "API key is required!" }),
    refresh_token: string({ required_error: "Refresh token is required!" }),
  }),
};

const authSchema = object({
  ...headers,
});

const payload = {
  body: object({
    firstName: string({ required_error: "First name is required." }),
    lastName: string({ required_error: "Last name is required." }),
    email: string({ required_error: "Email is required." }).email(
      "Invalid email format.",
    ),
    phoneNumber: string({ required_error: "Phone number is required." }),
    mfaMethod: nativeEnum(["sms", "email"], {
      required_error: "Mfa method is required",
    }),
  }),
};

const updateSelfSchema = object({
  ...payload,
});

module.exports = {
  authSchema,
  updateSelfSchema,
};
