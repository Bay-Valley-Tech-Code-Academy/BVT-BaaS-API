const { generateUserRefreshToken } = require("../lib/auth");
const { getOrganization } = require("../services/organization.services");

async function createUserHandler(req, res) {
  const organization = await getOrganization({ apiKey: req.headers.api_key });
  if (!organization) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access, api key is invalid",
    });
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const data = await createUserHandler({
    ...req.body,
    password: hashedPassword,
    organization_id: organization.organization_id,
  });

  const refreshToken = generateUserRefreshToken(organizationPayload);

  const userPayload = {
    id: data.insertId,
    email: req.body.email,
  };

  if (data.affectedRows === 0) {
    throw new Error();
  }
}

module.exports = {
  createUserHandler,
};
