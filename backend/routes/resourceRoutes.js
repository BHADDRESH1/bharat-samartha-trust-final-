const express = require('express');
const router = express.Router();
const { getResources, createResource } = require('../controllers/resourceController');
const { protect } = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');

router.route('/')
  .get(getResources)
  .post(protect, checkRole(['Admin', 'Super Admin', 'Mentor']), createResource);

module.exports = router;