const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please fill in your first name'],
      trim: true,
      minLength: [2, "First name must have at least 3 characters"]
    },
    lastName: {
      type: String,
      required: [true, 'Please fill in your last namer'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Please indicate what type of role this is'],
      default: "Full-time",
      validate: {
        validator: function (val) {
        const regExp = "test";
        regExp.test(val);
      },
      message: 'Please key in a valid email address',
      },
    },
    address: {
      type: String,
      trim: true
    }


  }
)

module.exports = userSchema
