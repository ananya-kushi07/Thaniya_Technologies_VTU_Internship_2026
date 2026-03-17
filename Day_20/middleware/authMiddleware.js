const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const error = new Error("Unauthorized access");
    error.status = 401;
    return next(error);
  }

  // Simple check (for learning purpose)
  if (token !== "mysecrettoken") {
    const error = new Error("Invalid token");
    error.status = 403;
    return next(error);
  }

  next();
};

module.exports = authMiddleware;