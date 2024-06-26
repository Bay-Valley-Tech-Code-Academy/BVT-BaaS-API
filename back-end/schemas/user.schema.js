const { object, string, number, nativeEnum, boolean } = require("zod");

const payload = {
  body: object({
    email: string({
      required_error: "Email is required!",
    }),
    password: string({
      required_error: "Password is required!",
    }),
    phoneNumber: string({
      required_error: "Phone number is required!",
    }),
    mfaMethod: nativeEnum(["sms", "email"], {
      required_error: "Mfa method is required",
    }),
  }),
};

const headers = {
  headers: object({
    api_key: string(),
  }),
};

const loginPayload = {
  body: payload.body.omit({ phoneNumber: true, mfaMethod: true }),
};

const createUserSchema = object({
  ...payload,
  ...headers,
});

const loginUserSchema = object({
  ...loginPayload,
  ...headers,
});

module.exports = {
  createUserSchema,
  loginUserSchema,
};
