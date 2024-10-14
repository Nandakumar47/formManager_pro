const express = require("express");
const authMiddleWare = require("../middlewares/authMiddleWares");
const { testRoute } = require("../controller/FormController");
const router = express.Router();

router.get("/test", testRoute);
module.exports = router;
