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
      res.send({
        status: 1,
        msg : "User created successfully",
        data: item
      });
    });
  } catch (error) {
    res.status(400).send({
      status: 0,
      msg : error
    });
  }
};

module.exports = { createUserControllerFn };
