const express = require('express');
const {getMonthlyStats, getAllJobs, createJob, getJob, patchJob, deleteJob } = require('../controllers/jobController')

const router = express.Router();

router.route('/monthly-stats/:month').get(getMonthlyStats);

router.route('/').get(getAllJobs).post(createJob);

router.route('/:id').get(getJob).patch(patchJob).delete(deleteJob);

module.exports = router
