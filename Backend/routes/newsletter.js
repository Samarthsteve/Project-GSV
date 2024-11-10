const express = require("express");
const router = express.Router();
const Newsletter = require("../models/newsletterModel");

// Subscribe to Newsletter
router.post("/", async (req, res) => {
  const {
    email
  } = req.body;
  try {
    const existingUser = await Newsletter.findOne({
      email
    });
    if (existingUser) {
      return res.json({
        message: "Email already subscribed",
        status: "duplicate"
      });
    }
    await Newsletter.create({
      email
    });
    res.status(201).json({
      message: "Subscribed successfully!",
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
    const newsletter = await Newsletter.find();
    res.json(newsletter);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.delete("/", async (req, res) => {
  try {
    const result = await Newsletter.deleteMany();
    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    res.status(200).json({
      message: "Users deleted successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

module.exports = router;