import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
    min: 2,
    max: 20,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
    min: 2,
    max: 20,
  },
  userName: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    index: true,
    lowercase: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("user", userSchema);
export default user;
