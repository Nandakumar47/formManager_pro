const express = require("express");
const authMiddleWare = require("../middlewares/authMiddleWares");
const {
  testRoute,
  generateApiKey,
  getGeneratedApiKey,
  handleStoreUserData,
  getStoredData,
} = require("../controller/FormController");
const router = express.Router();
//Verify the API key using middleware
router.post("/addFormData", handleStoreUserData);
//
router.use(authMiddleWare);
router.get("/test", testRoute);
router.post("/generate-api-token", generateApiKey);
router.get("/generatedApi", getGeneratedApiKey);
router.get("/getStoredData", getStoredData);
module.exports = router;
