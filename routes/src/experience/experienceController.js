var experienceModel = require("./experienceModel");

var createExperienceControllerFn = async (req, res) => {
  try {
    const body = req.body;
    const experienceModelData = new experienceModel();
    experienceModelData.name = body.name;
    experienceModelData.experience = body.experience;

    await experienceModelData.save().then((item) => {
      res.send({
        status: 1,
        msg: "Experience added successfully",
        data: item
      });
    });
  } catch (error) {
    res.status(400).send({
      status: 0,
      msg: error,
    });
  }
};

var getAllExperience = async(req, res)=>{
    try{
        const userExperience = await experienceModel.find();
        console.log(userExperience);
          if (userExperience) {
            res.send({
              status: 1,
              msg: "Experience list fetched successfully",
              data: userExperience
            });
          } else {
            res.send({
              status: 0,
              msg: "Data not available"
            });
          }
    }
    catch(error){
        res.status(400).send({
          status: 0,
          msg: error
        });
    }
}

 var  approveItemById = async(req, res)=> {
    const itemId = req.params.id;
  
    try {
      const updatedItem = await experienceModel.findByIdAndUpdate(itemId, { isApproved: true }, { new: true });
  
      if (!updatedItem) {
        return res.status(404).json({ status: 0, msg: 'Item not found' });
      }
  
      res.json({status: 1, data: updatedItem });
    } catch (error) {
      res.status(500).json({ status: 0, msg: error });
    }
  }

module.exports = { createExperienceControllerFn, getAllExperience, approveItemById };
