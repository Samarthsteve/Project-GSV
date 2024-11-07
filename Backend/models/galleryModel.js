const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  Uid: { // Uid = Unique id
    type: Number,
    required: true,
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
  type: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Gallery", gallerySchema);