const { getOrganization } = require("../services/organization.services");

async function createUserHandler(req, res) {
  const organization = await getOrganization({ apiKey: req.headers.api_key });
  console.log(organization);
}

module.exports = {
  createUserHandler,
};
