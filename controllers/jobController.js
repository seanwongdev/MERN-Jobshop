const Job = require('../models/jobModel')


exports.getAllJobs = async (req, res) => {
  const jobs = await Job.find()
  res.status(200).json({
    status: 'success',
    results: jobs.length,
    data: { jobs }
  })
}

exports.createJob = async (req, res) => {
  const newJob = await Job.create(req.body)
  res.status(201).json({
    status: 'success',
    data: { job: newJob }
  })
}

exports.getJob = async (req, res) => {
  const {id} = req.params
  const job = await Job.findById(id)
  res.status(200).json({
    status: 'success',
    data: { job }
  })
}

exports.patchJob = async (req, res) => {
  const {id} = req.params
  const job = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  } )
  res.status(200).json({
    status: 'success',
    data: { job }
  })
}

exports.deleteJob = async (req, res) => {
  const {id} = req.params
  const job = await Job.findByIdAndDelete(id)


  res.status(204).json({
    status: 'success',
    data: null,
  })
}

exports.getMonthlyStats = async (req,res) => {
  const stats =  await Job.aggregate([
    {

    }
  ])
}
