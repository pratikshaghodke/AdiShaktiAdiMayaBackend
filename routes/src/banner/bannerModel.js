const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    filename: String,
    originalName: String,
  },
  
  { timestamps: true }
);

const Image = mongoose.model("bannerImage", imageSchema);

module.exports = Image ;
