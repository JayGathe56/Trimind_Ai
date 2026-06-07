const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  prompt: String,
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Image", ImageSchema);