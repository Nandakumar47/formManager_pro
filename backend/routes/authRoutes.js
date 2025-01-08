const express = require("express");
const router = express.Router();
const {
  login,
  signUp,
  refreshAccessToken,
  logout,
  me,
} = require("../controller/authController");
const validateRefreshToken = require("../middlewares/validateRefreshToken");
const authMiddleWare = require("../middlewares/authMiddleWares");
router.use(authMiddleWare);
router.post("/login", login);
router.post("/signUp", signUp);
router.post("/logout", logout);
router.get("/me", me);
router.post("/token/refresh", validateRefreshToken, refreshAccessToken);
module.exports = router;
