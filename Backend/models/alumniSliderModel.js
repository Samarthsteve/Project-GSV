const mongoose = require('mongoose');

const alumniSliderSchema = new mongoose.Schema({
  Uid: { // Uid = Unique id
    type: Number,
    required: true,
    immutable: true
  },
  img: {
    type: String,
    required: true
  },
  alt: String,
})

module.exports = mongoose.model("AlumniSlider", alumniSliderSchema);