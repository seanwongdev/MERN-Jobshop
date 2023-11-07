const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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
      unique: true,
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
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please confirm your password'],
      validate: {
        // only works on SAVE!!
        validator: function (val) {
          return this.password === val;
        },
        message: 'Passwords do not match',
      },
    },
    passwordChangedAt: Date

  },
);

userSchema.pre('save', async function (next) {
  // only run function if password was modified
  if (!this.isModified('password')) return next();

  //Hash password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
}

userSchema.methods.changedPasswordAfter = function(JWTTimeStamp) {
  if(this.passwordChangedAt) {
    const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
    console.log(this.passwordChangedAt, JWTTimeStamp);
    return JWTTimeStamp < changedTimestamp;
  }

  return false;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
