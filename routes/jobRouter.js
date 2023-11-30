const express = require("express");
const {
  getMonthlyStats,
  getAllJobs,
  createJob,
  getJob,
  patchJob,

  deleteMultipleJobs,
} = require("../controllers/jobController");
const authController = require("../controllers/authController");

const router = express.Router();

router.delete("/delete-multiple", deleteMultipleJobs);

router.route("/monthly-stats").get(getMonthlyStats);
router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(getJob).patch(patchJob);

module.exports = router;
