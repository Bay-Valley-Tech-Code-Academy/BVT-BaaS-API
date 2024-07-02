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

module.exports = {
  authSchema,
};
