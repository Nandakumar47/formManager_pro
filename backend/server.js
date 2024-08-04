const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/authRoutes");
const PORT = process.env.PORT || 6001;
app.use(cors());
app.use(express.json());
const MONGO_URI = "mongodb://0.0.0.0:27017/formManager";
app.use("/api", authRoutes);
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
  console.log("listening");
});
