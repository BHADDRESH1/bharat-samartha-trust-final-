const Donation = require('../models/Donation');
const Cause = require('../models/Cause');

// @desc    Create new donation
// @route   POST /api/donations
// @access  Private
const createDonation = async (req, res) => {
  const { causeId, amount, paymentMethod, isRecurring, donorName, donorEmail, donorPhone, donorPan } = req.body;

  try {
    const donationData = {
      cause: causeId,
      amount,
      paymentMethod,
      isRecurring,
      status: 'Success' // Mocking successful payment for now
    };

    if (req.user) {
      donationData.donor = req.user._id;
    } else {
      if (!donorName || !donorEmail) {
        return res.status(400).json({ message: 'Name and Email are required for guest donations.' });
      }
      donationData.guest = {
        name: donorName,
        email: donorEmail,
        phone: donorPhone,
        pan: donorPan
      };
    }

    const donation = new Donation(donationData);

    const createdDonation = await donation.save();

    // Update cause raised amount
    if (causeId) {
      const cause = await Cause.findById(causeId);
      if (cause) {
        cause.raisedAmount += Number(amount);
        await cause.save();
      }
    }

    res.status(201).json(createdDonation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get my donations
// @route   GET /api/donations/my
// @access  Private
const getMyDonations = async (req, res) => {
  try {
    const donations = await Donation.find({ donor: req.user._id }).populate('cause', 'title category');
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all donations (Admin)
// @route   GET /api/donations
// @access  Private/Admin
const getDonations = async (req, res) => {
  try {
    const donations = await Donation.find({}).populate('donor', 'name email').populate('cause', 'title');
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get donation by ID
// @route   GET /api/donations/:id
// @access  Private
const getDonationById = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id).populate('donor', 'name email').populate('cause', 'title');
    if (donation) {
      // Ensure only admin or the donor can view
      if (req.user.role !== 'Admin' && req.user.role !== 'Super Admin' && donation.donor._id.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'Not authorized' });
      }
      res.json(donation);
    } else {
      res.status(404).json({ message: 'Donation not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createDonation, getMyDonations, getDonations, getDonationById };