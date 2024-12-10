const express = require("express");
const router = express.Router();
const { addHabit, getHabits, deleteHabit } = require("../controllers/habitController");

router.post("/habits", addHabit);
router.get("/habits", getHabits);
router.delete("/habits/:id", deleteHabit);

module.exports = router;
