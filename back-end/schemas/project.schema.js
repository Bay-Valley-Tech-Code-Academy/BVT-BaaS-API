const { object, string, number } = require("zod");

const params = {
  params: object({
    projectId: number({
      coerce: true,
      required_error: "projectId is required",
    }),
  }),
};

const toggleDisableLoginParams = {
  params: params.params.merge(
    object({
      projectId: number({
        coerce: true,
        required_error: "projectId is required",
      }),
    }),
  ),
};
const getUsersByProjectIdSchema = object({ ...params });
const regenerateProjectKeysSchema = object({ ...params });
const deleteProjectSchema = object({ ...params });
const toggleDisableLoginSchema = object({ ...toggleDisableLoginParams });

const updateProjectNameSchema = object({
  ...params,
  body: object({
    name: string({ required_error: "Project title is required" }),
  }),
});

const createProjectSchema = object({
  body: object({
    name: string({ required_error: "Project title is required." }),
  }),
});

module.exports = {
  regenerateProjectKeysSchema,
  getUsersByProjectIdSchema,
  deleteProjectSchema,
  toggleDisableLoginSchema,
  updateProjectNameSchema,
  createProjectSchema,
};
