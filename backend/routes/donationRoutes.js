const express = require('express');
const router = express.Router();
const { createDonation, getMyDonations, getDonations, getDonationById, getRecentDonations } = require('../controllers/donationController');
const { protect, optionalProtect } = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');

router.route('/')
  .post(optionalProtect, createDonation)
  .get(protect, checkRole(['Admin', 'Super Admin']), getDonations);

router.get('/recent', getRecentDonations);
router.route('/my').get(protect, getMyDonations);
router.route('/:id').get(protect, getDonationById);

module.exports = router;