const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
var cors = require("cors");
var routes = require("./routes/routes");

app.use(
  cors()
);

// const allowedOrigins = ['https://pratikshaghodke.github.io/AdhiShaktiAdhiMaya/'];
// app.use(cors({
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// }));


mongoose.connect(
  // "mongodb://127.0.0.1:27017/AdhiShaktiAdhiMaya",
  "mongodb+srv://pratiksha:Pratiksha04$@cluster0.zj4bww4.mongodb.net/adhiShaktiAdhiMaya?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
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
