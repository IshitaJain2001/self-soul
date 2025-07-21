
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isSuperAdmin: {
    type: Boolean,
    default: false, // normal user by default
  },
});

export const User = mongoose.model("User", userSchema);
