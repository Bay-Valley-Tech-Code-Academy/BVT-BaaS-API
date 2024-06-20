const requireAuth = (req, res, next) => {
  if (!req.headers || req.headers.auth !== "secret") {
    return res.sendStatus(404);
  }
  next();
};
module.exports = requireAuth;
