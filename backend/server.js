const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/authRoutes");
const formRoutes = require("./routes/formRoutes");
const cookieParser = require("cookie-parser");
const authMiddleWare = require("./middlewares/authMiddleWares");

const PORT = process.env.PORT || 6001;
app.use(
  cors({
    origin: "http://localhost:3000", // The origin of your front-end application
    credentials: true, // Allow cookies to be sent with requests
  })
);
app.use(express.json());
app.use(cookieParser());

const MONGO_URI = "mongodb://0.0.0.0:27017/formManager";
app.use(authMiddleWare);
app.use("/api", formRoutes);
app.use("/auth", authRoutes);
// Function to connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
}
app.get("/", (req, res) => {
  return res.json({ success: true });
});
// app.post("/api/signUp", signUp);
// app.post("/api/login", login);
// Connect to the database
connectDB();
app.listen(PORT, () => {
  console.log(`listening to port : ${PORT}`);
});
