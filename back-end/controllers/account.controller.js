const { getAccountType } = require("../services/accountType.services");

async function getAccountHandler(req, res) {
  try {
    const organization = req.user;
    const accountData = await getAccountType(organization.id);

    return res.status(200).json({
      success: true,
      data: accountData,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: "Server error, please try again later",
    });
  }
}

module.exports = {
  getAccountHandler,
};
