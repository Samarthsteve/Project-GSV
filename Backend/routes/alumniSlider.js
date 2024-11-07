const express = require('express');
const router = express.Router();
const AlumniSlider = require("../models/alumniSliderModel");

// Dev
router.post("/", async (req, res) => {
  try {
    await AlumniSlider.create(req.body.sliders);
    res.status(200).json({
      message: "Slider created successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.delete("/:Uid", async (req, res) => {
  try {
    const result = await AlumniSlider.deleteMany({
      Uid: req.params.Uid

    }); // Updated to await and use deleteOne for a single deletion
    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Slider not found"
      });
    }
    res.status(200).json({
      message: "Slider deleted successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});
// Dev end

router.get("/", async (req, res) => {
  try {
    const sliders = await AlumniSlider.find();
    res.json(sliders);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.patch("/:Uid", getSlider, async (req, res) => {
  let slider = res.slider;
  const body = req.body

  if (body.img != null) {
    slider.img = body.img
  }
  if (body.alt != null) {
    slider.alt = body.alt
  }

  try {
    const updatedSlider = await slider.save();
    res.json(updatedSlider)
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
})

// Middleware
async function getSlider(req, res, next) {
  let slider;
  try {
    slider = await AlumniSlider.findOne({
      Uid: req.params.Uid
    }); // Use findOne for a single result
    if (!slider) {
      return res.status(404).json({
        message: "Slider not found"
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
  res.slider = slider
  next()
}

module.exports = router;

