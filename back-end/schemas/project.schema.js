const { object, number } = require("zod");

const params = {
  params: object({
    projectId: number({
      coerce: true,
      required_error: "projectId is required",
    }),
  }),
};
const getUsersByProjectIdSchema = object({ ...params });
const regenerateProjectKeysSchema = object({ ...params });
const deleteProjectSchema = object({ ...params });

module.exports = {
  regenerateProjectKeysSchema,
  getUsersByProjectIdSchema,
  deleteProjectSchema,
};
