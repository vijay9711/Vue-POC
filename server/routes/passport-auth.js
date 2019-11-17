var passport = require("passport");
const URL = process.env.PORT || 3001;
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");
module.exports = function(app) {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["https://www.googleapis.com/auth/plus.login"]
    })
  );
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    function(req, res) {
      const encryptedString = cryptr.encrypt(req.user.id);
      console.log("what is red ", req);
      res
        .status(301)
        .redirect(`http://localhost:8081/dashboard?id=${encryptedString}`);
    }
  );
};
