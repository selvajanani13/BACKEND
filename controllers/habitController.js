const Habit = require("../models/Habit");

// Add a new habit
const addHabit = async (req, res) => {
  try {
    const habit = new Habit({
      name: req.body.name,
    });
    await habit.save();
    res.status(201).json(habit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all habits
const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.status(200).json(habits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a habit
const deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }
    await habit.remove();
    res.status(200).json({ message: "Habit deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { addHabit, getHabits, deleteHabit };

