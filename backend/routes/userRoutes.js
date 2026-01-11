const express = require('express');
const router = express.Router();
const { getUsers, deleteUser, getUserById, updateUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');

router.route('/')
  .get(protect, checkRole(['Admin', 'Super Admin']), getUsers);

router.route('/:id')
  .get(protect, checkRole(['Admin', 'Super Admin']), getUserById)
  .put(protect, checkRole(['Admin', 'Super Admin']), updateUser)
  .delete(protect, checkRole(['Super Admin']), deleteUser);

module.exports = router;