const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { generateAccessToken, generateRefreshToken } = require("../lib/auth");
const {
  createOrganization,
  getOrganizationByEmail,
  getOrganizationById,
  deleteOrganization,
} = require("../services/organization.services");

async function createOrganizationHandler(req, res) {
  try {
<<<<<<< HEAD
    const organization = await getOrganization({ email: req.body.email });
=======
    const organization = await getOrganizationByEmail(req.body.email);
>>>>>>> main
    //   If an organization already exist, we throw a bad response.
    if (organization) {
      return res.status(409).json({
        success: false,
        error: "Organization already exists",
      });
    }

    const apiKey = crypto.randomBytes(32).toString("hex");
    const secret = crypto.randomBytes(32).toString("hex");

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const data = await createOrganization({
      ...req.body,
      password: hashedPassword,
      apiKey,
      secret,
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

async function loginOrganizationHandler(req, res) {
  try {
    const organization = await getOrganizationByEmail(req.body.email);
    if (!organization) {
      return res.status(400).json({
        success: "false",
        error: "Invalid email or password",
      });
    }

    const organizationPayload = {
      id: organization.organization_id,
      email: organization.email,
      name: organization.password,
    };

    const match = await bcrypt.compare(
      req.body.password,
      organization.password,
    );
    if (!match) {
      return res.status(400).json({
        success: "false",
        error: "Invalid email or password",
      });
    }
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

async function deleteOrganizationHandler(req, res) {
  try {
    const organizationId = req.params.organizationId;
    const organization = await getOrganizationById(organizationId);
    if (!organization) {
      return res.status(400).json({
        success: "false",
        error: "Organization does not exist.",
      });
    }

    // Authentication check
    if (req.user.id !== organization.organization_id) {
      return res.status(403).json({
        success: false,
        error: "Unauthorized access",
      });
    }

    const result = await deleteOrganization(organizationId);

    if (result.affectedRows === 0) {
      return res.status(400).json({
        success: false,
        error: "Failed to delete organization",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Organization deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: "Server error, please try again later",
    });
  }
}

module.exports = {
  createOrganizationHandler,
  loginOrganizationHandler,
  deleteOrganizationHandler,
};
