const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model("Enquiry", enquirySchema);