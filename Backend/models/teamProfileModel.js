const mongoose = require('mongoose');

const teamProfileSchema = new mongoose.Schema({
  Pid: {
    // Pid = Page id
    type: String,
    required: true,
    lowercase: true,
    immutable: true
  },
  Uid: {
    // Uid = Unique id
    type: Number,
    required: true,
    immutable: true
  },
  img: {
    type: String,
    required: true
  },
  alt: String,
  name: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  place: {
    type: String
  },
  comment: {
    type: String
  },
})

module.exports = mongoose.model("TeamProfile", teamProfileSchema);