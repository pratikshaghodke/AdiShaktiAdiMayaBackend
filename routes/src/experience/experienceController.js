var experienceModel = require("./experienceModel");

var createExperienceControllerFn = async (req, res) => {
  try {
    const body = req.body;
    const experienceModelData = new experienceModel();
    experienceModelData.name = body.name;
    experienceModelData.experience = body.experience;

    await experienceModelData.save().then((item) => {
      res.send(item);
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

var getAllExperience = async(req, res)=>{
    try{
        const userExperience = await experienceModel.find();
        console.log(userExperience);
          if (userExperience) {
            res.send(userExperience);
          } else {
            res.send("Data is not available");
          }
    }
    catch(error){
        res.status(400).send(error);
    }
}

 var  approveItemById = async(req, res)=> {
    const itemId = req.params.id;
  
    try {
      const updatedItem = await experienceModel.findByIdAndUpdate(itemId, { isApproved: true }, { new: true });
  
      if (!updatedItem) {
        return res.status(404).json({ error: 'Item not found' });
      }
  
      res.json({item: updatedItem });
    } catch (error) {
      res.status(500).json({ error: 'Error approving item' });
    }
  }

module.exports = { createExperienceControllerFn, getAllExperience, approveItemById };
