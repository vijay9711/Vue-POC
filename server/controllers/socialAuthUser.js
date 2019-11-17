const SocialModel = require("../module/authUserDetails.js");
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");

socialAuthUser = (req, res) => {
  const userId = req.params && req.params.id;
  const decryptedString = cryptr.decrypt(userId);
  console.log("from social Auth", Number(decryptedString));
  SocialModel.find({ socialID: Number(decryptedString) }, (err, data) => {
    if (data.length !== 0) {
      console.log(data);
      res.json([
        {
          id: userId,
          firstName: data[0].first_name,
          lastName: data[0].last_name,
          picture: data[0].picture
        }
      ]);
    } else if (err) {
      console.log("entering catch block");
      console.log(e);
      console.log("leaving catch block");
    }
  });
};
module.exports = { socialAuthUser };
