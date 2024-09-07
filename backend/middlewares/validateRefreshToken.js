const jwt = require("jsonwebtoken");

const validateRefreshToken = (req, res, next) => {
  const refreshToken = req?.cookies?.refreshToken;

  if (!refreshToken) {
    return res.status(403).json({ message: "Refresh token not provided" });
  }

  jwt.verify(
    refreshToken,
    "this is my secret key for refresh token",
    (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Invalid refresh token" });
      }
      req.user = decoded;
      next();
    }
  );
};

module.exports = validateRefreshToken;
