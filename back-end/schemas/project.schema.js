const { object, string, number } = require("zod");

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

const updateProjectNameSchema = object({
  ...params,
  body: object({
    name: string({ required_error: "Project title is requred" }),
  }),
});

module.exports = {
  regenerateProjectKeysSchema,
  getUsersByProjectIdSchema,
  deleteProjectSchema,
  updateProjectNameSchema,
};
