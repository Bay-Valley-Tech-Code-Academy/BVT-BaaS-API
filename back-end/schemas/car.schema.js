const { object, string, number } = require("zod");
const payload = {
  body: object({
    make: string({
      required_error: "The make of car is required",
    }),
    model: string({
      required_error: "The model of car is required",
    }),
    year: number({
      required_error: "The year of car is required",
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

const createCarSchema = object({
  ...payload,
});

const updateCarSchema = object({
  ...params,
  ...payload,
});

module.exports = {
  createCarSchema,
  getCarSchema,
  updateCarSchema,
};
