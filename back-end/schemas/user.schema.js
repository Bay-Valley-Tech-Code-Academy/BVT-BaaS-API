const { object, string, number, nativeEnum, boolean } = require("zod");

const payload = {
  body: object({
    email: string({
      required_error: "Email is required!",
    }).email("Invalid email format!"),
    password: string({
      required_error: "Password is required!",
    }).min(8, "Password must be at least 8 characters!"),
    phoneNumber: string({
      required_error: "Phone number is required!",
    }),
    mfaMethod: nativeEnum(["sms", "email"], {
      required_error: "Mfa method is required",
    }),
  }),
};

const loginPayload = {
  body: payload.body.omit({ phoneNumber: true, mfaMethod: true }),
};

const MfaPayload = {
  body: object({
    mfaCode: number({ coerce: true, required_error: "MFA Code is required" }),
  }),
};

const headers = {
  headers: object({
    api_key: string(),
  }),
};

const createUserSchema = object({
  ...payload,
  ...headers,
});

const deleteUserSchema = object({
  params: object({
    userId: number({
      required_error: "userId is requried",
      coerce: true,
    }),
    projectId: number({
      required_error: "projectId is required",
      coerce: true,
    }),
  }),
});

const loginUserSchema = object({
  ...loginPayload,
  ...headers,
});

const userMfaSchema = object({ ...MfaPayload });

module.exports = {
  createUserSchema,
  deleteUserSchema,
  loginUserSchema,
  userMfaSchema,
};
