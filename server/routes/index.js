const userController = require("../controllers/userController.js");
module.exports = function(app) {
  app.post("/index", userController.userLogin);
  app.post("/login", userController.userSignup);
};
