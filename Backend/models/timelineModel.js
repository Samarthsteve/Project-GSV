const mongoose = require('mongoose');

const timelineSchema = new mongoose.Schema({
  Uid: {
    // Uid = Unique id
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  alt: String,
  title: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model("Timeline", timelineSchema);