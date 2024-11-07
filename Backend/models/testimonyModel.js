const mongoose = require('mongoose');

const testimonySchema = new mongoose.Schema({
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
    required: true
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
  comment: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Testimony", testimonySchema);