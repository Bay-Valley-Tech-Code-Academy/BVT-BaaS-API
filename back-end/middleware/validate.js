const validate = (schema) => async (req, res, next) => {
  try {
    await schema.parseAsync(req);
    next();
  } catch (error) {
    const formattedErrors = error.errors.map((e) => ({
      path: e.path.slice(1).join("."),
      message: e.message,
    }));
    return res.status(400).json({
      error: "Validation Error",
      message: "One or more fields are invalid",
      details: formattedErrors,
    });
  }
};

module.exports = validate;
