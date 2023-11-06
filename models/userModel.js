const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please fill in your first name'],
      trim: true,
      minLength: [2, "First name must have at least 3 characters"],
    },
    lastName: {
      type: String,
      required: [true, 'Please fill in your last name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please indicate your email'],
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email address'],
    },
    address: {
      type: String,
      trim: true,
    },
    photo: String,
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minLength: [8, 'Password needs to be at least 8 characters'],
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please confirm your password'],
    },
  },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
