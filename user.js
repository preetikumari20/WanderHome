
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose= require("passport-local-mongoose");
const userSchema = new mongoose.Schema({
   email: {
   type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function (value) {
        // Simple email regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: props => `"${props.value}" is not a valid email address!`
    }
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, "Username must be at least 3 characters long"],
    maxlength: [20, "Username must be at most 20 characters long"],
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9_]+$/.test(value);
      },
      message: props => `"${props.value}" is not a valid username! Only letters, numbers, and underscores are allowed.`
    }
  }
});
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);