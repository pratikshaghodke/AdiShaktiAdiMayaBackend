var register = require("../user/userModel");

var loginControllerFn = async (req, res) => {
  try {
    console.log(req);
    var email = req.body.email;
    var password = req.body.password;
    const useremail = await register.findOne({
      email: email,
      password: password
    });

    var response = {
      status: 0,
      data: {},
    };
    if (useremail) {
      response = {
        status: 1,
        data: useremail,
      };
      // res.set('Access-Control-Allow-Origin',' https://pratikshaghodke.github.io')
      res.send(response);

    } else {
      res.send(response);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { loginControllerFn  };
