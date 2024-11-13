const mongoose = require('mongoose');

const imageRecordSchema = new mongoose.Schema({
  public_id: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt timestamps
});

module.exports = mongoose.model("ImageRecord", imageRecordSchema);