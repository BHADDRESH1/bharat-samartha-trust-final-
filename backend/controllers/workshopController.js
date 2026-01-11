const Workshop = require('../models/Workshop');

// @desc    Get workshops
// @route   GET /api/workshops
// @access  Public
const getWorkshops = async (req, res) => {
  try {
    const workshops = await Workshop.find({});
    res.json(workshops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create workshop
// @route   POST /api/workshops
// @access  Private/Admin
const createWorkshop = async (req, res) => {
  try {
    const workshop = await Workshop.create(req.body);
    res.status(201).json(workshop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getWorkshops, createWorkshop };