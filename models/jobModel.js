const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "Please fill in a company name"],
    trim: true,
    minLength: [3, "Company name must have at least 3 characters"],
  },
  position: {
    type: String,
    required: [true, "Please fill in the role that you are applying for"],
    trim: true,
  },
  type: {
    type: String,
    required: [true, "Please indicate what type of role this is"],
    default: "full-time",
    enum: {
      values: ["Full-time", "Part-time", "Contract", "Internship"],
      message:
        "Job type is either: Full-time, Part-time, Contract or Internship",
    },
  },
  status: {
    type: String,
    default: "Application",
    enum: {
      values: ["Application", "Interview", "Offer", "Rejected"],
      message:
        "Kindly choose between: Application, Interview, Offer and Rejected",
    },
  },
  address: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Job must have a user"],
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
