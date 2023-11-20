const express = require("express");
const authController = require("../controllers/authController");
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getCurrentUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.get("/current-user", authController.protect, getCurrentUser);

router
  .route("/")
  .get(authController.protect, getAllUsers)
  .post(authController.protect, createUser);
router
  .route("/:id")
  .get(authController.protect, getUser)
  .patch(authController.protect, updateUser)
  .delete(authController.protect, deleteUser);

module.exports = router;
