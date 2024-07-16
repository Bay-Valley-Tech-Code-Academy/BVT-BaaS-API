const request = require("supertest");
const { createServer } = require("../../server.js");

const app = createServer();

const organizationPayloads = [
  {
    email: "neworg1@example.com",
    password: "password123",
    name: "New Organization 1",
  },
  {
    email: "neworg2@example.com",
    password: "password123",
    name: "New Organization 2",
  },
];

const SIGNUP_URL = "/api/organizations/signup";
const LOGIN_URL = "/api/organizations/login";
const DELETE_ORG_URL = (organizationId) =>
  `/api/organizations/${organizationId}`;

const testCreateOrganization = async (payload) => {
  return await request(app).post(SIGNUP_URL).send(payload);
};

const testLoginOrganization = async (payload) => {
  return await request(app).post(LOGIN_URL).send(payload);
};

const testDeleteOrganization = async (organizationId, token) => {
  const url = DELETE_ORG_URL(organizationId);
  return await request(app).delete(url).set("Authorization", `Bearer ${token}`);
};

module.exports = {
  organizationPayloads,
  testCreateOrganization,
  testLoginOrganization,
  testDeleteOrganization,
};
