const express = require('express');
const {getMonthlyStats, getAllJobs, createJob, getJob, patchJob, deleteJob } = require('../controllers/jobController')
const authController = require('../controllers/authController')

const router = express.Router();

router.route('/monthly-stats').get(getMonthlyStats);

router.route('/').get(getAllJobs).post(createJob);

router.route('/:id').get(getJob).patch(patchJob).delete(authController.restrictTo('admin'), deleteJob);

module.exports = router
