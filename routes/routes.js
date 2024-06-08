const express = require("express");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the destination folder for uploaded files
    cb(null, "uploads/banner");
  },
  filename: (req, file, cb) => {
    const fileExtension = path.extname(file.originalname);
    const newFilename = file.fieldname + "-" + Date.now() + fileExtension;
    cb(null, newFilename);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();
var userController = require("./src/user/userController");
var loginController = require("./src/login/loginController");
var bannerController = require("./src/banner/bannerController");
var experienceController = require("./src/experience/experienceController");
var newsController = require("./src/news/newsController");

router.route("/api/createUser").post(userController.createUserControllerFn);
router.route("/api/userLogin").post(loginController.loginControllerFn);
router
  .route("/api/uploadBanner")
  .post(upload.single("image"), bannerController.uploadImage);

// router.route("/api/images").get(bannerController.getAllImages);
router
  .route("/api/createExperience")
  .post(experienceController.createExperienceControllerFn);
router
  .route("/api/fetchExperienceData")
  .get(experienceController.getAllExperience);
router
  .route("/api/approveExperience/:id")
  .put(experienceController.approveItemById);
router
  .route("/api/addNews")
  .post(experienceController.addNews);
router
  .route("/api/getnews")
  .get(newsController.getNews);
  
module.exports = router;
