exports.createValidator = (req, res, next) => {
  req.check("title", "Write a title.").notEmpty();
  req.check("title", "title must be between 4 to 150 characters.").isLength({
    min: 4,
    max: 150,
  });
  req.check("body", "Write a body.").notEmpty();
  req.check("body", "body must be between 4 to 2000 characters.").isLength({
    min: 4,
    max: 2000,
  });
  const moreErrors = req.validationErrors();
  if (moreErrors) {
    const firstError = moreErrors.map((error) => error.msg)[0];
    return res.status(400).json({
      Error: firstError,
    });
  }
  next();
};
