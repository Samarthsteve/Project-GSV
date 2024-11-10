const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  graduationYear: { type: Number, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model("Alumni", alumniSchema);
