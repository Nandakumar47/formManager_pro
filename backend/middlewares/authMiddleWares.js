const jwt = require("jsonwebtoken");
const authMiddleWare = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ message: "Access denied" });
    }
    const token = authHeader.replace("Bearer ", "");
    const verified = jwt.verify(
      token,
      "this is my secret key for access token"
    );
    req.user = verified;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      // Handle expired token case
      return res
        .status(401)
        .json({ code: "tokenExpiry", message: "Token expired" });
    } else if (error instanceof jwt.JsonWebTokenError) {
      // Handle invalid token case
      return res
        .status(401)
        .json({ code: "invalidToken", message: "Invalid token" });
    } else {
      // Handle other errors
      return res.status(401).json({ message: "Access denied" });
    }
  }
};
module.exports = authMiddleWare;
