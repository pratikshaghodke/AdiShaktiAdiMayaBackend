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
  // "mongodb://127.0.0.1:27017/AdhiShaktiAdhiMaya",
  "mongodb+srv://pratiksha:Pratiksha04$@cluster0.zj4bww4.mongodb.net/adhiShaktiAdhiMaya?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  console.log("DB Connectedddd!!!!!!!!!!!")
);

app.listen(443, function checkDB(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("443 PORT Connected Successfully!!!!");
  }
});

app.use(cors());
app.use(express.json());
app.use(routes);
