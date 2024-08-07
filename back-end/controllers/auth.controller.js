async function authHandler(req, res) {
  return res.status(200).json({
    success: true,
    data: {
      refreshToken: req.token,
      user: { id: req.user.id, email: req.user.email },
    },
  });
}

module.exports = { authHandler };
