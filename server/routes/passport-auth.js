var passport = require("passport");
const URL = process.env.PORT || 3001;
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
      // console.log("what is red ", res);
      res.redirect("/dashboard:", res.user);
    }
  );
};
