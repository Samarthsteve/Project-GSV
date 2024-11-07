const mongoose = require('mongoose');

const imgThumbnailSchema = new mongoose.Schema({
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
  alt: String,
})

module.exports = mongoose.model("ImgThumbnails", imgThumbnailSchema);