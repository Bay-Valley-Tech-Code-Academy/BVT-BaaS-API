const {
    getAudit
  } = require("../services/audit.services");

  async function getAuditHandler(req, res) {
    try {
      const [audit] = await getAudit(req.params);
  
      if (!audit) {
        return res.status(400).json({
          message: "There was an error with the request",
        });
      }
      return res.status(200).json({
        message: "Audit retrieved successfully",
        data: audit,
      });
    } catch (e) {
      return res.status(500).json({
        message: "An unexpected error occured please try again later.",
      });
    }
  }
  
  module.exports = {
    getAuditHandler
  };