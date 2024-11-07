const express = require('express');
const router = express.Router();
const Profile = require("../models/teamProfileModel");

// Dev
router.post("/", async (req, res) => {
  try {
    await Profile.create(req.body.profiles);
    res.status(200).json({
      message: "Profile created successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.delete("/:Pid/:Uid", async (req, res) => {
  try {
    const result = await Profile.deleteMany({
      Pid: req.params.Pid,
      Uid: req.params.Uid
    }); // Updated to await and use deleteOne for a single deletion
    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Profile not found"
      });
    }
    res.status(200).json({
      message: "Profile deleted successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});
// Dev end

router.get("/:Pid", async (req, res) => {
  try {
    const profile = await Profile.find({
      Pid: req.params.Pid
    }); // Use findOne for a single result
    if (!profile) {
      return res.status(404).json({
        message: "Profile not found"
      });
    }
    res.json(profile)
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
}
);

router.patch("/:Pid/:Uid", getProfile, async (req, res) => {
  let profile = res.profile;
  const body = req.body

  if (body.img != null) {
    profile.img = body.img
  }
  if (body.alt != null) {
    profile.alt = body.alt
  }
  if (body.name != null) {
    profile.name = body.name
  }
  if (body.designation != null) {
    profile.designation = body.designation
  }
  if (body.place != null) {
    profile.place = body.place
  }
  if (body.comment != null) {
    profile.comment = body.comment
  }

  try {
    const updatedProfile = await profile.save();
    res.json(updatedProfile)
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
})

// Middleware
async function getProfile(req, res, next) {
  let profile;
  try {
    profile = await Profile.findOne({
      Pid: req.params.Pid,
      Uid: req.params.Uid
    }); // Use findOne for a single result
    if (!profile) {
      return res.status(404).json({
        message: "Profile not found"
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
  res.profile = profile
  next()
}

module.exports = router;