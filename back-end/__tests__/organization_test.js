const { db } = require("../db");
const {
  testCreateOrganization,
  testLoginOrganization,
  organizationPayload,
  testDeleteOrganization,
} = require("../lib/test/helpers");

describe("Organization API", () => {
  beforeEach(async () => {
    await db.query("START TRANSACTION");
  });

  afterEach(async () => {
    await db.query("ROLLBACK");
  });

  describe("delete organization endpoint", () => {
    let organizationId;
    let accessToken;

    beforeEach(async () => {
      const createResponse = await testCreateOrganization(organizationPayload);
      expect(createResponse.status).toBe(200);
      organizationId = createResponse.body.data.id

      const loginResponse = await testLoginOrganization(organizationPayload);
      expect(loginResponse.status).toBe(200);
      accessToken = loginResponse.body.data.accessToken;
    })

    it("should delete an organization if the user is authorized and return 200", async () => {
      const { status, body } = await testDeleteOrganization(organizationId, accessToken);
      expect(status).toBe(200);
      expect(body).toHaveProperty("success", true);
      expect(body).toHaveProperty("message", "Organization deleted succesfully");
    });
  })

  describe("signup endpoint", () => {
    it("should create an organization if it does not exist and return 200", async () => {
      const { status, body } = await testCreateOrganization(
        organizationPayload
      );

      expect(status).toBe(200);
      expect(body).toHaveProperty("success", true);
      expect(body.data).toHaveProperty("accessToken");
      expect(body.data).toHaveProperty("refreshToken");
    });

    it("should not create an organization if one already exists and return 409", async () => {
      // First request to create the organization
      await testCreateOrganization(organizationPayload);

      // Second request to attempt to create the same organization
      const { status, body } = await testCreateOrganization(
        organizationPayload
      );

      expect(status).toBe(409);
      expect(body).toHaveProperty("success", false);
      expect(body).toHaveProperty("error", "Organization already exists");
    });
  });

  describe("login endpoint", () => {
    beforeEach(async () => {
      // Ensure organization is created before each login test
      await testCreateOrganization(organizationPayload);
    });

    it("should log in a user with correct credentials and return 200", async () => {
      const { status, body } = await testLoginOrganization(organizationPayload);

      expect(status).toBe(200);
      expect(body).toHaveProperty("success", true);
      expect(body.data).toHaveProperty("accessToken");
      expect(body.data).toHaveProperty("refreshToken");
    });

    it("should return 401 if credentials are incorrect", async () => {
      const { status, body } = await testLoginOrganization({
        email: organizationPayload.email,
        password: "wrongpassword",
      });

      expect(status).toBe(401);
      expect(body).toHaveProperty("success", false);
      expect(body).toHaveProperty("error", "Invalid email or password");
    });
  });
});