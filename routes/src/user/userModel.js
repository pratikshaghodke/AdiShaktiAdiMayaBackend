const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    mobileNo: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
  },
  { timestamps: true }
);

var register = mongoose.model("usermaster", userSchema);
module.exports = register;
