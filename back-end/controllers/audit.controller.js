const {
    getAudit
  } = require("../services/audit.services");

  async function getAuditHandler(req, res) {
    try {
      const projectId = req.params.projectId;
      const audits = await getAudit({projectId});
  
      if (!audits ||  audits.length === 0) {
        return res.status(404).json({
          message: "There was an error with the request",
        });
      }
      return res.status(200).json({
        message: "Audit retrieved successfully",
        data: audits,
      });
    } catch (e) {
      console.error('Error retrieving audits:', e); // Log the error details
      return res.status(500).json({
        message: "An unexpected error occured please try again later.",
      });
    }
  }
  
  module.exports = {
    getAuditHandler
  };