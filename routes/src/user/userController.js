var userModel = require("./userModel");

var createUserControllerFn = async (req, res) => {
  try {
    const body = req.body;
    const userModelData = new userModel();
    userModelData.name = body.name;
    userModelData.email = body.email;
    userModelData.mobileNo = body.mobileNo;
    userModelData.password = body.password;

    await userModelData.save().then((item) => {
      res.send("user careted successfully");
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { createUserControllerFn };
