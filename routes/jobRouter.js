const express = require("express");
const {
  getMonthlyStats,
  getAllJobs,
  createJob,
  getJob,
  patchJob,
  deleteJob,
  patchStatus,
  patchDate,
} = require("../controllers/jobController");
const authController = require("../controllers/authController");

const router = express.Router();

router.patch("/update-status/:id", patchStatus);
router.patch("/update-date/:id", patchDate);
router.route("/monthly-stats").get(getMonthlyStats);

router.route("/").get(getAllJobs).post(createJob);

router
  .route("/:id")
  .get(getJob)
  .patch(patchJob)
  .delete(authController.restrictTo("admin"), deleteJob);

module.exports = router;
