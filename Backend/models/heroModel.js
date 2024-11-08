const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  Pid: { // Pid = Page id
    type: String,
    required: true,
    lowercase: true,
    immutable: true
  },
  img: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model("Hero", heroSchema);