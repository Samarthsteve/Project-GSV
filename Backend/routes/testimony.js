const express = require('express');
const router = express.Router();
const Testimony = require("../models/testimonyModel");

router.post("/", async (req, res) => {
  try {
    await Testimony.create(req.body);
    res.status(200).json({
      message: "Testimony created successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.delete("/:Pid/:Uid", async (req, res) => {
  try {
    const result = await Testimony.deleteMany({
      Pid: req.params.Pid,
      Uid: req.params.Uid
    }); // Updated to await and use deleteOne for a single deletion
    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Testimony not found"
      });
    }
    res.status(200).json({
      message: "Testimony deleted successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.get("/:Pid", async (req, res) => {
  try {
    const testimony = await Testimony.find({
      Pid: req.params.Pid
    }); // Use findOne for a single result
    if (!testimony) {
      return res.status(404).json({
        message: "Testimony not found"
      });
    }
    res.json(testimony)
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
}
);

router.patch("/:Pid/:Uid", getTestimony, async (req, res) => {
  let testimony = res.testimony;
  const body = req.body

  if (body.Uid != null) {
    testimony.Uid = body.Uid
  }
  if (body.img != null) {
    testimony.img = body.img
  }
  if (body.alt != null) {
    testimony.alt = body.alt
  }
  if (body.name != null) {
    testimony.name = body.name
  }
  if (body.comment != null) {
    testimony.comment = body.comment
  }

  try {
    const updatedTestimony = await testimony.save();
    res.json(updatedTestimony)
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
})

// Middleware
async function getTestimony(req, res, next) {
  let testimony;
  try {
    testimony = await Testimony.findOne({
      Pid: req.params.Pid,
      Uid: req.params.Uid
    }); // Use findOne for a single result
    if (!testimony) {
      return res.status(404).json({
        message: "Testimony not found"
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
  res.testimony = testimony
  next()
}

module.exports = router;