const express = require("express");
const { User } = require("../models");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, ...rest } = req.body;
    const user = await User.findOneAndUpdate({ email }, rest, { upsert: true });
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/", async (req, res) => {
  const { email } = req.query;
  try {
    const user = await User.findOne({ email });
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
