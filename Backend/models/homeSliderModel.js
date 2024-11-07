const mongoose = require('mongoose');

const homeSliderSchema = new mongoose.Schema({
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
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model("HomeSlider", homeSliderSchema);