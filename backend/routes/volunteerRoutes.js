const express = require('express');
const router = express.Router();
const { applyVolunteer, getApplications, updateApplicationStatus } = require('../controllers/volunteerController');
const { protect } = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');
const upload = require('../middleware/upload');

router.route('/apply').post(protect, upload.single('idProof'), applyVolunteer);
router.route('/').get(protect, checkRole(['Admin', 'Super Admin']), getApplications);
router.route('/:id').put(protect, checkRole(['Admin', 'Super Admin']), updateApplicationStatus);

module.exports = router;