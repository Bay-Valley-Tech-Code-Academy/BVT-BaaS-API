const { getOrganizationById } = require("../services/organization.services");
const { getProjectByApiKey } = require("../services/projects.services");
const { getUserByEmail } = require("../services/user.services");

const checkProjectUserLimits = async (req, res, next) => {
  const projectPromise = getProjectByApiKey(req.headers.api_key);
  const userPromise = getUserByEmail(req.body.email);
  const [project, user] = await Promise.all([projectPromise, userPromise]);

  if (!project) {
    return res.status(404).json({
      success: false,
      message: "Api key is invalid",
    });
  }
  // check to make sure that the user doesn't already exist for this project
  if (user && project.project_id === user.project_id) {
    res.status(409).json({
      success: false,
      message:
        "A user with this email already exists for the specified project.",
    });
  }

  const organization = await getOrganizationById(project.organization_id);

  // check to see if the number of project users is less than the limit
  if (organization.users > organization.max_users) {
    return next();
  }

  return res.status(403).json({
    message:
      "User limit for this project reached. Upgrade your account to add more users.",
  });
};

module.exports = checkProjectUserLimits;
