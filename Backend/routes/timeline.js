const express = require('express');
const router = express.Router();
const Timeline = require("../models/timelineModel");

router.post("/", async (req, res) => {
  try {
    await Timeline.create(req.body);
    res.status(200).json({
      message: "Timeline created successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.delete("/:Uid", async (req, res) => {
  try {
    const result = await Timeline.deleteMany({
      Uid: req.params.Uid

    }); // Updated to await and use deleteOne for a single deletion
    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Timeline not found"
      });
    }
    res.status(200).json({
      message: "Timeline deleted successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const timelines = await Timeline.find();
    res.json(timelines);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.patch("/:Uid", getTimeline, async (req, res) => {
  let timeline = res.timeline;
  const body = req.body

  if (body.img != null) {
    timeline.img = body.img
  }
  if (body.alt != null) {
    timeline.alt = body.alt
  }
  if (body.title != null) {
    timeline.title = body.title
  }
  if (body.time != null) {
    timeline.time = body.time
  }
  if (body.description != null) {
    timeline.description = body.description
  }

  try {
    const updatedTimeline = await timeline.save();
    res.json(updatedTimeline)
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
})

// Middleware
async function getTimeline(req, res, next) {
  let timeline;
  try {
    timeline = await Timeline.findOne({
      Uid: req.params.Uid
    }); // Use findOne for a single result
    if (!timeline) {
      return res.status(404).json({
        message: "Timeline not found"
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
  res.timeline = timeline
  next()
}

module.exports = router;