const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  name: String,
  lastName: String,
});

const User = mongoose.model("User", usersSchema);

module.exports = User;