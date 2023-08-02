const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var experienceSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    experience: {
      type: String,
      require: true,
    },
    isApproved: {
        type: Boolean,
        default: false
    }
  },
  { timestamps: true }
);

var experience = mongoose.model("experienceMaster", experienceSchema);
module.exports = experience;
