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

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// })


// const allowedOrigins = ['https://pratikshaghodke.github.io/', 'https://pratikshaghodke.github.io/AdhiShaktiAdhiMaya', 'https://pratikshaghodke.github.io/AdhiShaktiAdhiMaya/'];
// app.use(cors({
//   origin: function (origin, callback) {
//     console.log(origin);
//     if(!origin) {
//       console.log("in no origin");
//       return callback(null, true);
//     }
//     if(allowedOrigins.indexOf(origin) === -1 || !origin){
//       console.log("in -1 origin");
//       var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     console.log("no error");
//     return callback(null, true);
//   }
// }));

const allowedOrigins = ['https://adishaktiadimaya.in','https://adishaktiadimaya.in/', 'https://pratikshaghodke.github.io/','https://adishaktiadimayabackend.in/','https://pratikshaghodke.github.io', 'http://192.168.43.193:4200', 'http://192.168.43.193:4200/'];
//const allowedOrigins = ['*']
const corsOptions = {
  origin: (origin, callback) => {
          console.log(origin)
          console.log("origin check ",allowedOrigins.indexOf(origin));
    if (allowedOrigins.indexOf(origin) !== -1) {

    //if (true){
      callback(null, true)
    } else {
      callback(new Error())
    }
  }
}


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

const PORT = 443; // Default HTTPS port
const HOSTNAME = "0.0.0.0"
server.listen(PORT, () => {
  console.log(`Server is running at http://${HOSTNAME}:${PORT}/`);
});
//console.log(corsOptions)
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
