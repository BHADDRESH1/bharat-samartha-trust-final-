const express = require('express');
const router = express.Router();
const { createCase, getCases, updateCase } = require('../controllers/legalController');
const { protect } = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');
const upload = require('../middleware/upload');

router.route('/')
  .post(protect, upload.array('documents', 3), createCase)
  .get(protect, checkRole(['Admin', 'Super Admin', 'Legal Aid Case Worker', 'Legal Aid Applicant']), getCases);

router.route('/:id')
  .put(protect, checkRole(['Admin', 'Super Admin', 'Legal Aid Case Worker']), updateCase);

module.exports = router;