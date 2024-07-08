const request = require("supertest");
const { createServer } = require("../../server.js");

const app = createServer();

const organizationPayload = {
  email: "neworg@example.com",
  password: "password123",
  name: "New Organization",
};
const SIGNUP_URL = "/api/organizations/signup";
const LOGIN_URL = "/api/organizations/login";

const testCreateOrganization = async (payload) => {
  return await request(app).post(SIGNUP_URL).send(payload);
};

const testLoginOrganization = async (payload) => {
  return await request(app).post(LOGIN_URL).send(payload);
};

module.exports = {
  organizationPayload,
  testCreateOrganization,
  testLoginOrganization,
};
