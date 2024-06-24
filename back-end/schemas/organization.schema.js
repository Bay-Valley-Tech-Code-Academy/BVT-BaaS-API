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

const params = {
  params: object({
    carId: number({
      required_error: "productId is required",
      coerce: true,
    }),
  }),
};

const getCarSchema = object({
  ...params,
});

const createOrganizationSchema = object({
  ...payload,
});

const updateCarSchema = object({
  ...params,
  ...payload,
});

module.exports = {
  createOrganizationSchema,
};
