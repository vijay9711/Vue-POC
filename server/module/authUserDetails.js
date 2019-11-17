const mongoose = require("mongoose");
const SocialAuthUserDetails = new mongoose.Schema({
  first_name: String,
  last_name: String,
  picture: String,
  provider: String,
  socialID: Number
});
module.exports = mongoose.model("Social_auth_users", SocialAuthUserDetails);
