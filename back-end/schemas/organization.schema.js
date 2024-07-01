const { object, string, number } = require("zod");

const payload = {
  body: object({
    email: string({
      required_error: "Email is required!",
    }).email("Invalid email format!"),
    password: string({
      required_error: "Password is required!",
    }).min(8, "Password must be at least 8 characters!"),
    name: string({
      required_error: "Name is required!",
    }),
  }),
};

const loginPayload = { body: payload.body.omit({ name: true }) };

const organizationParams = {
  params: object({
    organizationId: number({
      required_error: "organizationId is required",
      coerce: true,
    }),
  }),
};

const createOrganizationSchema = object({
  ...payload,
});

const deleteOrganizationSchema = object({
  ...organizationParams,
});

const loginOrganizationSchema = object({
  ...loginPayload,
});

module.exports = {
  createOrganizationSchema,
  loginOrganizationSchema,
  deleteOrganizationSchema,
};
