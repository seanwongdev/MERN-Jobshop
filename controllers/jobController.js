const Job = require("../models/jobModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const mongoose = require("mongoose");
const dayjs = require("dayjs");

exports.getAllJobs = catchAsync(async (req, res, next) => {
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
});

exports.createJob = catchAsync(async (req, res, next) => {
  req.body.user = req.user.id;
  const newJob = await Job.create(req.body);

  res.status(201).json({
    status: "success",
    data: { job: newJob },
  });
});

exports.getJob = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const job = await Job.findById(id).populate({
    path: "user",
    select: "-__v",
  });
  res.status(200).json({
    status: "success",
    data: { job },
  });
});

exports.patchJob = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const job = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: { job },
  });
});

exports.deleteJob = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const job = await Job.findByIdAndDelete(id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.getMonthlyStats = catchAsync(async (req, res, next) => {
  let stats = await Job.aggregate([
    {
      $match: { user: req.user._id },
    },
    {
      $group: {
        _id: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" },
        },
        totalJobs: { $sum: 1 },
      },
    },
    {
      $sort: { "_id.year": -1, "_id.month": -1 },
    },
  ]);
  stats = stats
    .map((el) => {
      const {
        _id: { year, month },
        totalJobs,
      } = el;
      const date = dayjs()
        .month(month - 1)
        .year(year)
        .format("MMM YY");
      return { date, totalJobs };
    })
    .reverse();

  res.status(200).json({
    status: "success",
    data: { stats },
  });
});
