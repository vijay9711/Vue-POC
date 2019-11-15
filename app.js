const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const serveStatic = require("serve-static");
const path = require("path");

const app = express();

const port = process.env.PORT || 3001;
const passport = require("passport");
const auth = require("./server/controllers/passportAuth");

app.use("/", serveStatic(path.join(__dirname, "/dist")));
app.use(serveStatic(__dirname + "/dist"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));
app.use(require("cookie-parser")());
app.use(passport.initialize());
app.use(passport.session());
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// <---------------------------connection--------------------------------->
mongoose.connect(
  "mongodb+srv://vijay:vijay1997@vue-poc1-bnq3v.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
require("./server/routes/index.js")(app);
require("./server/routes/passport-auth.js")(app);
app.get("/", (req, res) => {
  res.send("sending from back end");
});
// // <----------------------------schema------------------------------------->
// const signUpSchema = new mongoose.Schema({
//   first_name: String,
//   last_name: String,
//   password: String,
//   email: String,
//   phone: String
// });
// // <---------------------------------Model----------------------------------->
// const User_details = mongoose.model("User_details", signUpSchema);
// const data = {
//     first_name: "vijay",
//     last_name: "vj",
//     password: "vijay",
//     email: "vijay@gmail",
//     phone: "23124134",

// }

// User_details.create(data, (err, res) => {
//     if (err) {
//         throw err;
//     }
//     else {
//         console.log(res)
//     }
// })
// const index = "/index";
// const username = "/username";

// app.post(index, (req, res) => {
//   let data = req.body;
//   User_details.find(
//     { email: data.email, password: data.password },
//     (err, data) => {
//       if (err) {
//         throw err;
//       } else {
//         if (data.length !== 0) {
//           // res.send("access_granted")
//           res.json([
//             {
//               id: data[0]._id,
//               access: "granted"
//             }
//           ]);
//         } else if (data.length === 0) {
//           // res.send("access_Denied")
//           res.json([
//             {
//               access: "denied"
//             }
//           ]);
//         }
//       }
//     }
//   );
// });
// app.post(username, (req, res) => {
//   //   res.send("User add successfully");
//   let Sign_data = req.body;
//   User_details.find({ email: Sign_data.email }, (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       if (data.length !== 0) {
//         res.json([
//           {
//             status: "id_Exist"
//           }
//         ]);
//       } else if (data.length === 0) {
//         User_details.create(Sign_data, err => {
//           if (err) {
//             throw err;
//           } else {
//             res.json([
//               {
//                 status: "success"
//               }
//             ]);
//           }
//         });
//       }
//     }
//   });
// });

app.listen(port, () => {
  console.log("server running", port);
});
