const bcrypt = require("bcrypt");
const { generateAccessToken, generateRefreshToken } = require("../lib/auth");
const {
  createOrganization,
  getOrganization,
} = require("../services/organization.services");

async function createOrganizationHandler(req, res) {
  try {
    const organization = await getOrganization(req.body.email);
    //   If an organization already exist, we throw a bad response.
    if (organization) {
      return res.status(409).json({
        success: false,
        error: "Organization already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const data = await createOrganization({
      ...req.body,
      password: hashedPassword,
    });

    //   if affectredRows is === 0, that means there was something wrong with the insertion of the record
    if (data.affectedRows === 0) {
      throw new Error();
    }
    const organizationPayload = {
      id: data.insertId,
      email: req.body.email,
      name: req.body.name,
    };
    const accessToken = generateAccessToken(organizationPayload);
    const refreshToken = generateRefreshToken(organizationPayload);
    return res.status(200).json({
      success: true,
      data: {
        accessToken,
        refreshToken,
      },
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: "Server error, please try again later",
    });
  }
}

module.exports = {
  createOrganizationHandler,
};
