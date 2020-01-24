const express = require("express");
const marioMod = require("./mario.model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const chars = await marioMod.find();
    res.json(chars);
  } catch (err) {
    console.log(err, "find- err");
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newChar = await marioMod.insert(req.body);
    res.status(201).json(newChar);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
