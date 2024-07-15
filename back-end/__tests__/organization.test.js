const { db } = require("../db");
const {
  testCreateOrganization,
  testLoginOrganization,
  testDeleteOrganization,
  organizationPayloads,
} = require("../lib/test/helpers");

describe("Organization API", () => {
  beforeEach(async () => {
    await db.query("START TRANSACTION");
  });

  afterEach(async () => {
    await db.query("ROLLBACK");
  });

  describe("signup endpoint", () => {
    it("should create an organization if it does not exist and return 200", async () => {
      const { status, body } = await testCreateOrganization(
        organizationPayloads[0],
      );

      expect(status).toBe(200);
      expect(body).toHaveProperty("success", true);
      expect(body.data).toHaveProperty("accessToken");
      expect(body.data).toHaveProperty("refreshToken");
    });

    it("should not create an organization if one already exists and return 409", async () => {
      // First request to create the organization
      await testCreateOrganization(organizationPayloads[0]);

      // Second request to attempt to create the same organization
      const { status, body } = await testCreateOrganization(
        organizationPayloads[0],
      );

      expect(status).toBe(409);
      expect(body).toHaveProperty("success", false);
      expect(body).toHaveProperty("error", "Organization already exists");
    });
  });

  describe("login endpoint", () => {
    beforeEach(async () => {
      // Ensure organization is created before each login test
      await testCreateOrganization(organizationPayloads[0]);
    });

    it("should log in a user with correct credentials and return 200", async () => {
      const { status, body } = await testLoginOrganization(
        organizationPayloads[0],
      );

      expect(status).toBe(200);
      expect(body).toHaveProperty("success", true);
      expect(body.data).toHaveProperty("accessToken");
      expect(body.data).toHaveProperty("refreshToken");
    });

    it("should return 401 if credentials are incorrect", async () => {
      const { status, body } = await testLoginOrganization({
        email: organizationPayloads[0].email,
        password: "wrongpassword",
      });

      expect(status).toBe(401);
      expect(body).toHaveProperty("success", false);
      expect(body).toHaveProperty("error", "Invalid email or password");
    });
  });

  describe("delete organization endpoint", () => {
    let organizations = [];

    beforeEach(async () => {
      organizations = [];

      // Create multiple organizations
      for (const payload of organizationPayloads) {
        const createResponse = await testCreateOrganization(payload);
        expect(createResponse.status).toBe(200);
        const organizationId = createResponse.body.data.id;

        const loginResponse = await testLoginOrganization(payload);
        expect(loginResponse.status).toBe(200);
        const accessToken = loginResponse.body.data.accessToken;

        organizations.push({ organizationId, accessToken });
      }
    });

    it("should return 200 if the organization is deleted successfully", async () => {
      const { organizationId, accessToken } = organizations[0];
      const { status, body } = await testDeleteOrganization(
        organizationId,
        accessToken,
      );
      expect(status).toBe(200);
      expect(body).toHaveProperty("success", true);
      expect(body).toHaveProperty(
        "message",
        "Organization deleted successfully",
      );
    });

    it("should return 403 if the user is not authorized to delete the organization", async () => {
      const { organizationId } = organizations[0];
      const { accessToken } = organizations[1];
      const { status, body } = await testDeleteOrganization(
        organizationId,
        accessToken,
      );
      expect(status).toBe(403);
      expect(body).toHaveProperty("success", false);
      expect(body).toHaveProperty("error", "Unauthorized access");
    });

    // it("should return 401 if the user's token is invalid", async () => {
    //   const { organizationId } = organizations[0];
    //   const { status, body } = await testDeleteOrganization(
    //     organizationId,
    //     "invalid_token",
    //   );
    //   expect(status).toBe(401);
    //   expect(body).toHaveProperty("error", "Invalid token");
    // });

    it("should return 400 if the organization does not exist", async () => {
      const { accessToken } = organizations[0];
      const nonExistentOrganizationId = 9999;
      const { status, body } = await testDeleteOrganization(
        nonExistentOrganizationId,
        accessToken,
      );
      expect(status).toBe(400);
      expect(body).toHaveProperty("success", false);
      expect(body).toHaveProperty("error", "Organization does not exist.");
    });
  });
});
