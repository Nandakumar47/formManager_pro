const mongoose = require("mongoose");
const entrySchema = mongoose.Schema({
  userId: { type: String, required: true },
  providedData: {
    name: { type: String, required: true },
    contact: { type: String, required: true },
    message: { type: String, required: true },
    email: { type: String, required: true },
  },
  submittedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Entries", entrySchema);
