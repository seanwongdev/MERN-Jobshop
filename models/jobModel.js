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
    default: "Full-time",
    enum: {
      values: ["Full-time", "Part-time", "Contract", "Internship"],
      message:
        "Job type is either: Full-time, Part-time, Contract or Internship",
    },
  },
  status: {
    type: String,
    default: "Applied",
    enum: {
      values: [
        "Applied",
        "Shortlisted",
        "Assessment",
        "Interview",
        "Offer",
        "Rejected",
      ],
      message:
        "Kindly choose between: Applied, Shortlisted, Assessment, Interview, Offer and Rejected",
    },
  },
  salary: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    trim: true,
    default: "Singapore",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  jobPortal: {
    type: String,
    trim: true,
    defaultValue: "Careers Future",
    enum: {
      values: [
        "Careers Future",
        "LinkedIn",
        "Glints",
        "STARS SG",
        "NodeFlair",
        "Referral",
        "Company Site",
        "Others",
      ],
      message: "Kindly choose between the options provided",
    },
    required: [true, "Please indicate where you applied for this job"],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Job must have a user"],
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
