const express = require('express');
const authController = require('../controllers/authController');
const {getAllUsers, createUser, getUser, updateUser, deleteUser} = require('../controllers/userController')


const router = express.Router();

router.post('/signup', authController.signup);

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
