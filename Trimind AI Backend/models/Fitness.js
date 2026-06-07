const mongoose = require("mongoose");

const FitnessSchema = new mongoose.Schema({
  age: Number,
  gender: String,
  height: Number,
  weight: Number,
  goal: String,
  activity: String,
  setting: String,
  plan: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Fitness", FitnessSchema);