const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  Uid: {
    // Uid = Unique id
    type: Number,
    required: true,
    immutable: true
  },
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model("Question", questionSchema);