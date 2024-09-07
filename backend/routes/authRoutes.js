const express = require("express");
const router = express.Router();
const {
  login,
  signUp,
  refreshAccessToken,
  logout,
} = require("../controller/authController");
const validateRefreshToken = require("../middlewares/validateRefreshToken");
router.post("/login", login);
router.post("/signUp", signUp);
router.post("/logout", logout);
router.post("/token/refresh", validateRefreshToken, refreshAccessToken);
module.exports = router;
