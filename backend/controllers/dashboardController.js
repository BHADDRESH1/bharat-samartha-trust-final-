const User = require('../models/User');
const Donation = require('../models/Donation');
const Cause = require('../models/Cause');
const LegalCase = require('../models/LegalCase');
const VolunteerApplication = require('../models/VolunteerApplication');

// @desc    Get dashboard stats based on role
// @route   GET /api/dashboard
// @access  Private
const getDashboardStats = async (req, res) => {
  const { role, _id } = req.user;
  
  try {
    let stats = {};

    if (role === 'Admin' || role === 'Super Admin') {
      const totalDonations = await Donation.aggregate([{ $group: { _id: null, total: { $sum: "$amount" } } }]);
      const donorCount = await User.countDocuments({ role: 'Donor' });
      const volunteerCount = await User.countDocuments({ role: 'Volunteer' });
      const activeCauses = await Cause.countDocuments({ status: 'Ongoing' });
      const pendingCases = await LegalCase.countDocuments({ status: 'Under Review' });

      stats = {
        totalDonations: totalDonations[0]?.total || 0,
        donorCount,
        volunteerCount,
        activeCauses,
        pendingCases
      };
    } else if (role === 'Donor') {
      const myDonations = await Donation.aggregate([
        { $match: { donor: _id } },
        { $group: { _id: null, total: { $sum: "$amount" } } }
      ]);
      const donationCount = await Donation.countDocuments({ donor: _id });
      
      stats = {
        totalDonated: myDonations[0]?.total || 0,
        donationCount
      };
    } else if (role === 'Volunteer') {
      const tasks = 5; // Placeholder
      const hoursLogged = 24; // Placeholder
      stats = { tasks, hoursLogged };
    } else if (role === 'Legal Aid Case Worker') {
      const assignedCases = await LegalCase.countDocuments({ caseWorker: _id, status: 'In Progress' });
      const closedCases = await LegalCase.countDocuments({ caseWorker: _id, status: 'Closed' });
      stats = { assignedCases, closedCases };
    }

    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getDashboardStats };