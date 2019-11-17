const SocialUser = require("../controllers/socialAuthUser.js");
module.exports = function(app) {
  app.get("/socialUser/:id", SocialUser.socialAuthUser);
};
