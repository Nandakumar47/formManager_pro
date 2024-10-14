const jwt = require("jsonwebtoken");
const excludeRoutes = ["/auth/login", "/auth/signUp"];
const authMiddleWare = (req, res, next) => {
  try {
    if (excludeRoutes?.includes(req.path)) {
      next();
      return;
    }
    const authHeader = req.headers["authorization"];
    if (!authHeader && !req?.cookies?.accessToken) {
      return res.status(401).json({ message: "Access denied" });
    }
    const token =
      authHeader.replace("Bearer ", "") || req?.cookies?.accessToken;
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
