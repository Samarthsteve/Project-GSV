const express = require('express');
const router = express.Router();
const Question = require("../models/questionModel");

router.post("/", async (req, res) => {
  try {
    await Question.create(req.body);
    res.status(200).json({
      message: "Question created successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.delete("/:Uid", async (req, res) => {
  try {
    const result = await Question.deleteMany({
      Uid: req.params.Uid

    }); // Updated to await and use deleteOne for a single deletion
    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Question not found"
      });
    }
    res.status(200).json({
      message: "Question deleted successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.patch("/:Uid", getQuestion, async (req, res) => {
  let question = res.question;
  const body = req.body

  if (body.answer != null) {
    question.answer = body.answer
  }
  if (body.question != null) {
    question.question = body.question
  }

  try {
    const updatedQuestion = await question.save();
    res.json(updatedQuestion)
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
})

// Middleware
async function getQuestion(req, res, next) {
  let question;
  try {
    question = await Question.findOne({
      Uid: req.params.Uid
    }); // Use findOne for a single result
    if (!question) {
      return res.status(404).json({
        message: "Question not found"
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
  res.question = question
  next()
}

module.exports = router;