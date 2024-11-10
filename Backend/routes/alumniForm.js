const express = require("express");
const router = express.Router();
const Alumni = require("../models/alumniFormModel");

// Register Alumni
router.post("/", async (req, res) => {
  try {
    const existingAlumni = await Alumni.findOne({
      email: req.body.email
    });
    if (existingAlumni) {
      return res.json({
        message: "Email already registered",
        status: "duplicate"
      });
    }
    await Alumni.create({
      name: req.body.name,
      email: req.body.email,
      graduationYear: req.body.graduationYear,
      message: req.body.message
    });
    res.status(201).json({
      message: "Alumni registered successfully!",
      status: "success"
    });
  } catch (error) {
    res.json({
      message: "Server error",
      status: "error"
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.json(alumni);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.delete("/", async (req, res) => {
  try {
    const result = await Alumni.deleteMany(); 
    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Alumni not found"
      });
    }
    res.status(200).json({
      message: "Alumni deleted successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});


module.exports = router;