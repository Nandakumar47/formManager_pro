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
    return res.status(400).json({ message: "Invalid Token" });
  }
};
module.exports = authMiddleWare;
