const Image = require("./bannerModel");

const uploadImage = async (req, res) => {
  try {
    const { filename, originalname } = req.file;

    const newImage = new Image({
      filename,
      originalName: originalname,
    });

    await newImage.save();

    res.status(200).json({ message: "Image uploaded successfully." });
  } catch (err) {
    res.status(500).json({ error: "Error uploading the image." });
  }
};

// const getAllImages = (req, res) => {
//     Image.find({}, (err, images) => {
//       if (err) {
//         return res.status(500).json({ error: 'Error retrieving images.' });
//       }
//       res.status(200).json(images);
//     });
// }
  

module.exports = { uploadImage };
