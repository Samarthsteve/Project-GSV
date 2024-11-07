const express = require('express');
const router = express.Router();
const Hero = require("../models/heroModel");

// Dev
router.post("/", async (req, res) => {
  try {
    await Hero.create(req.body.heros);
    res.status(200).json({
      message: "Hero created successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.delete("/:Pid", async (req, res) => {
  try {
    const result = await Hero.deleteMany({
      Pid: req.params.Pid

    }); // Updated to await and use deleteOne for a single deletion
    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Hero not found"
      });
    }
    res.status(200).json({
      message: "Hero deleted successfully"
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
    const heros = await Hero.find();
    res.json(heros);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.get("/:Pid", getHero, async (req, res) => {
  res.json(res.hero)
}
);

router.patch("/:Pid", getHero, async (req, res) => {
  let hero = res.hero;
  const body = req.body

  if (body.img != null) {
    hero.img = body.img
  }
  if (body.alt != null) {
    hero.alt = body.alt
  }
  if (body.title != null) {
    hero.title = body.title
  }

  try {
    const updatedHero = await hero.save();
    res.json(updatedHero)
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
})

// Middleware
async function getHero(req, res, next) {
  let hero;
  try {
    hero = await Hero.findOne({
      Pid: req.params.Pid
    }); // Use findOne for a single result
    if (!hero) {
      return res.status(404).json({
        message: "Hero not found"
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
  res.hero = hero
  next()
}

module.exports = router;