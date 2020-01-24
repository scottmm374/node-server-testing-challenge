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

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const char = req.body;
  try {
    const findChar = await marioMod.findById(id);
    if (findChar) {
      const updateChar = await marioMod.update(id, char);
      res.status(201).json(updateChar);
    } else {
      res.status(404).json({ message: "Could not find id" });
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  if (id) {
    marioMod.remove(id);
    res.status(200).json({ message: `${id} Deleted succesfully.` });
  } else {
    res.status(401).json({ message: "id not found" });
  }
});
module.exports = router;
