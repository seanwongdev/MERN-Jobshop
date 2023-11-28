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
    {
      $limit: 9,
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

  let breakdown = await Job.aggregate([
    {
      $match: {
        user: req.user._id,
      },
    },
    {
      $group: {
        _id: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" },
        },
        Applied: {
          $sum: { $cond: [{ $eq: ["$status", "Applied"] }, 1, 0] },
        },
        Shortlisted: {
          $sum: { $cond: [{ $eq: ["$status", "Shortlisted"] }, 1, 0] },
        },
        Assessment: {
          $sum: { $cond: [{ $eq: ["$status", "Assessment"] }, 1, 0] },
        },
        Interview: {
          $sum: { $cond: [{ $eq: ["$status", "Interview"] }, 1, 0] },
        },
        Offer: {
          $sum: { $cond: [{ $eq: ["$status", "Offer"] }, 1, 0] },
        },
        Rejected: {
          $sum: { $cond: [{ $eq: ["$status", "Rejected"] }, 1, 0] },
        },
      },
    },
    {
      $sort: {
        _id: -1,
      },
    },
    {
      $limit: 9,
    },
  ]);

  breakdown = breakdown
    .map((element) => {
      const {
        _id: { year, month },
        Applied,
        Shortlisted,
        Assessment,
        Interview,
        Offer,
        Rejected,
      } = element;
      const date = dayjs()
        .month(month - 1)
        .year(year)
        .format("MMM YY");
      return {
        date,
        Applied,
        Shortlisted,
        Assessment,
        Interview,
        Offer,
        Rejected,
      };
    })
    .reverse();

  res.status(200).json({
    status: "success",
    data: { stats, breakdown },
  });
});
