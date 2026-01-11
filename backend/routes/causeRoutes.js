const express = require('express');
const router = express.Router();
const { getCauses, getCauseById, createCause, updateCause, deleteCause } = require('../controllers/causeController');
const { protect } = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');
const upload = require('../middleware/upload');

router.route('/')
  .get(getCauses)
  .post(protect, checkRole(['Admin', 'Super Admin']), upload.single('image'), createCause);

router.route('/:id')
  .get(getCauseById)
  .put(protect, checkRole(['Admin', 'Super Admin']), upload.single('image'), updateCause)
  .delete(protect, checkRole(['Admin', 'Super Admin']), deleteCause);

module.exports = router;