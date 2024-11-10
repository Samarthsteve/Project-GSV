const express = require("express");
const router = express.Router();
const Enquiry = require("../models/enquiryModel");

// Submit Enquiry
router.post("/", async (req, res) => {
  try {
    await Enquiry.create({
      fullName: req.body.fullName, 
      phone: req.body.phoneNumber
    });
    res.status(201).json({
      message: "Enquiry submitted successfully!",
      status: "success"
    });
  } catch (error) {
    res.json({
      message: error.message,
      status: "error"
    });
  }
});


router.get("/", async (req, res) => {
  try {
    const contacts = await Enquiry.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.delete("/", async (req, res) => {
  try {
    const result = await Enquiry.deleteMany();
    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Contact not found"
      });
    }
    res.status(200).json({
      message: "Contact deleted successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

module.exports = router;