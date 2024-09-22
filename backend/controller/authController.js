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
      const accessToken = jwt.sign(
        { userId: user._id },
        "this is my secret key for access token",
        {
          expiresIn: "1h",
        }
      );
      const refreshToken = jwt.sign(
        { userId: user._id },
        "this is my secret key for refresh token",
        {
          expiresIn: "12d",
        }
      );
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      res.json({
        success: true,
        accessToken,
        message: "Logged in successfully",
      });
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
    const accessToken = jwt.sign(
      { userId: newUser._id },
      "this is my secret key for access token",
      {
        expiresIn: "15m",
      }
    );
    const refreshToken = jwt.sign(
      { userId: newUser._id },
      "this is my secret key for refresh token",
      {
        expiresIn: "12d",
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      accessToken,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Failed :" + error,
    });
  }
};
const refreshAccessToken = (req, res) => {
  try {
    const user = req.user;
    const accessToken = jwt.sign(
      { userId: user.userId },
      "this is my secret key for access token",
      {
        expiresIn: "15m",
      }
    );
    const refreshToken = jwt.sign(
      { userId: user.userId },
      "this is my secret key for refresh token",
      {
        expiresIn: "12d",
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.json({ accessToken: accessToken, success: true });
  } catch (error) {
    return res.json({ success: false });
  }
};
const logout = (req, res) => {
  try {
    res.cookie("refreshToken", "", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 1,
    });
    return res.json({
      success: true,
      message: "Successfully logged out the user",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Something went wrong while logging out the user",
    });
  }
};
module.exports = { login, signUp, refreshAccessToken, logout };
