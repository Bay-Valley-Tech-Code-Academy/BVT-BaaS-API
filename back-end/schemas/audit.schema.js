const { object, string, number } = require("zod");


const params = {
    params: object({
      projectId: number({
        required_error: "projectId is required",
        coerce: true,
      }),
    }),
  };

  const getAuditSchema = object({
    ...params,
  });

  module.exports = {
    getAuditSchema
  };