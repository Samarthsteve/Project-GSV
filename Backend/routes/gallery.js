const express = require('express');
const router = express.Router();
const Gallery = require("../models/galleryModel");

router.post("/", async (req, res) => {
  try {
    await Gallery.create(req.body);
    res.status(200).json({
      message: "Image created successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.delete("/:type/:Uid", async (req, res) => {
  try {
    const result = await Gallery.deleteMany({
      type: req.params.type,
      Uid: req.params.Uid
    }); // Updated to await and use deleteOne for a single deletion
    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Image not found"
      });
    }
    res.status(200).json({
      message: "Image deleted successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const images = await Gallery.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.get("/:type", async (req, res) => {
  try {
    const gallery = await Gallery.find({
      type: req.params.type
    }); // Use findOne for a single result
    if (!gallery) {
      return res.status(404).json({
        message: "Image not found"
      });
    }
    res.json(gallery)
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
}
);

router.patch("/:type/:Uid", getGallery, async (req, res) => {
  let gallery = res.gallery;
  const body = req.body

  if (body.Uid != null) {
    gallery.Uid = body.Uid
  }
  if (body.img != null) {
    gallery.img = body.img
  }
  if (body.alt != null) {
    gallery.alt = body.alt
  }
  if (body.title != null) {
    gallery.title = body.title
  }

  try {
    const updatedGallery = await gallery.save();
    res.json(updatedGallery)
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
})

// Middleware
async function getGallery(req, res, next) {
  let gallery;
  try {
    gallery = await Gallery.findOne({
      type: req.params.type,
      Uid: req.params.Uid
    }); // Use findOne for a single result
    if (!gallery) {
      return res.status(404).json({
        message: "Image not found"
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
  res.gallery = gallery
  next()
}

module.exports = router;