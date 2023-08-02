const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
var cors = require("cors");
var routes = require("./routes/routes");

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

mongoose.connect(
  "mongodb://127.0.0.1:27017/AdhiShaktiAdhiMaya",
  console.log("DB Connectedddd!!!!!!!!!!!")
);

app.listen(3000, function checkDB(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("3000 PORT Connected Successfully!!!!");
  }
});

app.use(cors());
app.use(express.json());
app.use(routes);
