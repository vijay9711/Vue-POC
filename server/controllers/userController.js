const User_details = require("../module/userDetails.js");
userLogin = (req, res) => {
  let data = req.body;
  console.log(req.body);
  User_details.find(
    { email: data.email, password: data.password },
    (err, data) => {
      if (err) {
        throw err;
      } else {
        if (data.length !== 0) {
          // res.send("access_granted")
          res.json([
            {
              id: data[0]._id,
              access: "granted"
            }
          ]);
        } else if (data.length === 0) {
          // res.send("access_Denied")
          res.json([
            {
              access: "denied"
            }
          ]);
        }
      }
    }
  );
};

userSignup = (req, res) => {
  //   res.send("User add successfully");
  let Sign_data = req.body;
  User_details.find({ email: Sign_data.email }, (err, data) => {
    if (err) {
      throw err;
    } else {
      if (data.length !== 0) {
        res.json([
          {
            status: "id_Exist"
          }
        ]);
      } else if (data.length === 0) {
        User_details.create(Sign_data, err => {
          if (err) {
            throw err;
          } else {
            res.json([
              {
                status: "success"
              }
            ]);
          }
        });
      }
    }
  });
};
module.exports = { userLogin, userSignup };
