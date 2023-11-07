const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please fill in a company name'],
      trim: true,
      minLength: [3, "Company name must have at least 3 characters"]
    },
    position: {
      type: String,
      required: [true, 'Please fill in the role that you are applying for'],
      trim: true
    },
    type: {
      type: String,
      required: [true, 'Please indicate what type of role this is'],
      default: "Full-time",
      enum: {
        values: ['Full-time', 'part-time', 'contract','internship'],
        message: 'Job type is either: full-time, part-time, contract or internship',
      },
    },
    status: {
      type: String,
      default: "Application",
      enum: {
        values: ['Application', 'Interview', 'Offer','Rejected'],
        message: 'Kindly choose between: Application, Interview, Offer and Rejected',
      }
    },
    address: {
      type: String,
      trim: true
    },
    createdAt:{
      type: Date,
      default: Date.now()
    },
    users: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      }
    ]
  }
)


const Job = mongoose.model('Job', jobSchema);

module.exports = Job
