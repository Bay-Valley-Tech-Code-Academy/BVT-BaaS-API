const requireApiKey = (req, res, next) => {
  if (!req.headers || !req.headers.api_key) {
    return res.sendStatus(401).json({
      success: false,
      message: "Unauthorized access, api key missing or invalid",
    });
  }
  next();
};
module.exports = requireApiKey;
