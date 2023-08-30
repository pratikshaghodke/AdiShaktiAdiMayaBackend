const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
var cors = require("cors");
var routes = require("./routes/routes");
const https = require('https');
const fs = require('fs');

// app.use(
//   cors({
//     origin : '*'
//   })
// );

const allowedOrigins = ['https://pratikshaghodke.github.io/'];
app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));


mongoose.connect(
  // "mongodb://127.0.0.1:27017/AdhiShaktiAdhiMaya",
  "mongodb+srv://pratiksha:Pratiksha04$@cluster0.zj4bww4.mongodb.net/adhiShaktiAdhiMaya?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  console.log("DB Connectedddd!!!!!!!!!!!")
);

const https_options = {
  ca: fs.readFileSync("ca_bundle.crt"),
  key: fs.readFileSync("private.key"),
  cert: fs.readFileSync("certificate.crt")
 };

 const server = https.createServer(https_options, app);

const PORT = 8443; // Default HTTPS port
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);