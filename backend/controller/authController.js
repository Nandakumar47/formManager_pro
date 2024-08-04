const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(401).json({ message: "Invalid credentials" });
      const token = jwt.sign({ userId: user._id }, "this is my secret key", {
        expiresIn: "1h",
      });
      res.json({ success: true, token, message: "Logged in successfully" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(401).json({ message: "Something went wrong" });
  }
};
const signUp = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    const token = jwt.sign({ userId: newUser._id }, "this is my secret key", {
      expiresIn: "1h",
    });
    return res
      .status(201)
      .json({ success: true, message: "User Created Successfully", token });
  } catch (error) {
    return res.json({
      success: false,
      message: "Failed :" + error,
    });
  }
};
module.exports = { login, signUp };
