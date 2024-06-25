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

const createOrganizationSchema = object({
  ...payload,
});

module.exports = {
  createOrganizationSchema,
};
