async function authHandler(req, res) {
  return res.status(200).json({
    success: true,
    data: {
      refreshToken: req.token,
      user: { id: req.user.id, email: req.user.email },
    },
  });
}

function updateSelfHandler(req, res) {
  console.log("req:", req);
  return res.status(200).json({
    success: true,
    message: "Updated user information successfully.",
  });
}

module.exports = { authHandler, updateSelfHandler };
