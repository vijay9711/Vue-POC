const mongoose = require("mongoose");
// <----------------------------schema------------------------------------->
const signUpSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  password: String,
  email: String,
  phone: String
});
// <---------------------------------Model----------------------------------->
module.exports = mongoose.model("User_details", signUpSchema);
