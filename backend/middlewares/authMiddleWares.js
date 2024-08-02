const jwt = require("jsonwebtoken");
const authMiddleWare = (req, res, next) => {
  const token = req.headers("Authorization").replace("Bearer", "");
  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }
  try {
    const verified = jwt.verify(token, "this is my secret key");
    req.user = verified;
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invalid Token" });
  }
};
module.exports = authMiddleWare;
