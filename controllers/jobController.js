const Job = require("../models/jobModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAllJobs = async (req, res) => {
  const { search, status, type } = req.query;
  const queryObj = {
    user: req.user.id,
  };

  if (search) {
    queryObj.$or = [
      { position: { $regex: search, $options: "i" } },
      { company: { $regex: search, $options: "i" } },
    ];
  }

  if (status && status !== "All") {
    queryObj.status = req.query.status;
  }

  if (type && type !== "All") {
    queryObj.type = req.query.type;
  }

  const jobs = await Job.find(queryObj);
  res.status(200).json({
    status: "success",
    results: jobs.length,
    data: { jobs },
  });
};

exports.createJob = catchAsync(async (req, res, next) => {
  req.body.user = req.user.id;
  const newJob = await Job.create(req.body);

  res.status(201).json({
    status: "success",
    data: { job: newJob },
  });
});

exports.getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id).populate({
    path: "user",
    select: "-__v",
  });
  res.status(200).json({
    status: "success",
    data: { job },
  });
};

exports.patchJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: { job },
  });
};

exports.deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findByIdAndDelete(id);

  res.status(204).json({
    status: "success",
    data: null,
  });
};

exports.getMonthlyStats = async (req, res) => {
  const stats = await Job.aggregate([
    {
      $group: {
        _id: { $month: "$createdAt" },
        numTourStarts: { $sum: 1 },
      },
    },
  ]);
  res.status(200).json({
    status: "success",
    data: { stats },
  });
};
