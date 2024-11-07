const express = require('express');
const router = express.Router();
const ImgThumbnail = require("../models/imgThumbnailModel");

// Dev
router.post("/", async (req, res) => {
  try {
    await ImgThumbnail.create(req.body.thumbnails);
    res.status(200).json({
      message: "Thumbnail created successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.delete("/:Pid", async (req, res) => {
  try {
    const result = await ImgThumbnail.deleteMany({
      Pid: req.params.Pid

    }); // Updated to await and use deleteOne for a single deletion
    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Thumbnail not found"
      });
    }
    res.status(200).json({
      message: "Thumbnail deleted successfully"
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
    const thumbnails = await ImgThumbnail.find();
    res.json(thumbnails);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.get("/:Pid", getThumbnail, async (req, res) => {
  res.json(res.thumbnail)
}
);

router.patch("/:Pid", getThumbnail, async (req, res) => {
  let thumbnail = res.thumbnail;
  const body = req.body

  if (body.img != null) {
    thumbnail.img = body.img
  }
  if (body.alt != null) {
    thumbnail.alt = body.alt
  }
  if (body.title != null) {
    thumbnail.title = body.title
  }

  try {
    const updatedThumbnail = await thumbnail.save();
    res.json(updatedThumbnail)
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
})

// Middleware
async function getThumbnail(req, res, next) {
  let thumbnail;
  try {
    thumbnail = await ImgThumbnail.findOne({
      Pid: req.params.Pid
    }); // Use findOne for a single result
    if (!thumbnail) {
      return res.status(404).json({
        message: "Thumbnail not found"
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
  res.thumbnail = thumbnail
  next()
}

module.exports = router;