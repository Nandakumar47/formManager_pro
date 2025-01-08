const User = require("../models/User");
const validateAPIKey = async (req, res, next) => {
  try {
    const apiKey =
      req.headers.authorization?.split(" ")[1] || req?.query?.apiKey; // Extract Bearer token
    if (!apiKey) {
      return res.status(401).json({ error: "API key is missing" });
    }

    // Find user by API key
    const user = await User.findOne({ apiKey });
    if (!user) {
      return res.status(401).json({ error: "Invalid API key" });
    }

    // Attach user details to the request object
    req.user = { userId: user._id };
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = validateAPIKey;
