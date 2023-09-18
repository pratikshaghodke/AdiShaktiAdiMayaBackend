const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var newsSchema = new Schema(
  {
    newsHeading: {
      type: String,
      require: true,
    },
    news: {
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

var news = mongoose.model("experienceMaster", newsSchema);
module.exports = news;
