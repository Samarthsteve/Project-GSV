const express = require("express");
const router = express.Router();
const cloudinary = require("../config/cloudinary").v2;
const uploader = require("../config/multerConfig");
const ImageRecord = require("../models/imageRecord");

router.post("/upload", uploader.single("file"), async (req, res) => {
  try {
    const upload = await cloudinary.uploader.upload(req.file.path, {
      public_id: req.body.public_id,
      asset_folder: "gsv-assets"
    });
    const imageDb = await ImageRecord.create({
      public_id: upload.public_id,
      url: upload.secure_url
    });
    res.json({
      success: true,
      file: upload.secure_url,
      name: upload.public_id
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }});

router.delete("/delete/:public_id", async (req, res) => {
  try {
    const destroy = await cloudinary.uploader.destroy(req.params.public_id);
    const destroyDb = await ImageRecord.deleteMany({
      public_id: req.params.public_id
    });
    if (destroyDb.deletedCount === 0) {
      return res.status(404).json({
        message: "Image not found"
      });
    }
    res.status(200).json({
      message: "Image deleted successfully",
      status: destroy.result,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
})

module.exports = router