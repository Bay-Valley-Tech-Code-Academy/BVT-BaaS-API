const { object, string, number } = require("zod");
const payload = {
  body: object({
    email: string({
      required_error: "Email is required!",
    }),
    password: string({
      required_error: "Password is required!",
    }),
    name: string({
      required_error: "Name is required!",
    }),
  }),
};

const loginPayload = { body: payload.body.omit({ name: true }) };

const createOrganizationSchema = object({
  ...payload,
});

const loginOrganizationSchema = object({
  ...loginPayload,
});

module.exports = {
  createOrganizationSchema,
  loginOrganizationSchema,
};
