const express = require('express');
const router = express.Router();
const { getWorkshops, createWorkshop } = require('../controllers/workshopController');
const { protect } = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');

router.route('/')
  .get(getWorkshops)
  .post(protect, checkRole(['Admin', 'Super Admin']), createWorkshop);

module.exports = router;