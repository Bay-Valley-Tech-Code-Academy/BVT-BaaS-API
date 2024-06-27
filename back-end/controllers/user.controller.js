const { generateUserRefreshToken } = require("../lib/auth");
const { getOrganization } = require("../services/organization.services");

async function createUserHandler(req, res) {
  try {
    const application = await getApplication({ apiKey: req.headers.api_key });
    console.log(application);
    if (!application) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access, api key is invalid",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const data = await createUserHandler({
      ...req.body,
      password: hashedPassword,
      application_id: application.application_id,
    });

    if (data.affectedRows === 0) {
      throw new Error();
    }

    const userPayload = {
      id: data.insertId,
      email: req.body.email,
    };

    const refreshToken = generateUserRefreshToken(
      userPayload,
      application.secret
    );
    return res.status(200).json({
      success: true,
      data: {
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
  createUserHandler,
};
