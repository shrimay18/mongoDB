const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    }
  });

  const User = mongoose.model("User", UserSchema);
  
module.exports = User;

  