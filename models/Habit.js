const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Habit", habitSchema);