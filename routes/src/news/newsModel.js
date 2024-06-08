const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var newsSchema = new Schema(
  {
    heading: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
  },
  { timestamps: true }
);

var news = mongoose.model("newsMaster", newsSchema);
module.exports = news;
