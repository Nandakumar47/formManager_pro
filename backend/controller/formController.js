const crypto = require("crypto");
const User = require("../models/User");
const Entries = require("../models/Form");
const testRoute = (req, res) => {
  try {
    return res.json({ success: true, message: "Success" });
  } catch (error) {
    return res.json({ success: false, message: "Failure" });
  }
};
const generateApiKey = async (req, res) => {
  try {
    const userId = req.user.userId;
    const newApiKey = crypto.randomBytes(32).toString("hex");
    await User.findByIdAndUpdate(userId, { apiKey: newApiKey });
    return res.status(200).json({
      apiKey: newApiKey,
      success: true,
      message: "Api key fetched Successfully",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Failed to generate API key",
    });
  }
};
const getGeneratedApiKey = async (req, res) => {
  try {
    const userId = req.user.userId;
    const userDetails = await User.findById(userId).exec();
    if (userDetails) {
      return res.status(200).json({
        success: true,
        apiKey: userDetails.apiKey,
        message: "Successfully fetched the apiKey",
      });
    } else {
      throw new Error("Failed to fetch api key");
    }
  } catch (error) {
    return res.json({
      success: false,
      message: error?.message,
    });
  }
};
const handleStoreUserData = async (req, res) => {
  try {
    const { userId } = req.user;
    const { name, contact, message, email } = req.body;
    const dataToAdd = {
      userId,
      providedData: {
        name,
        contact,
        message,
        email,
      },
    };
    const newEntry = new Entries(dataToAdd);
    const result = await newEntry.save();
    return res.status(200).json({
      success: true,
      message: "Successfully added the data",
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: "Failed to add the details",
    });
  }
};
const getStoredData = async (req, res) => {
  try {
    const { userId } = req.user;
    const userDetails = await Entries.find({ userId });
    return res.status(200).json({
      success: true,
      message: "Successfully fetched",
      result: userDetails,
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: "Failed fetch the details",
    });
  }
};
module.exports = {
  testRoute,
  generateApiKey,
  getGeneratedApiKey,
  handleStoreUserData,
  getStoredData,
};
