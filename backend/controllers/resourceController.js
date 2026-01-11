const Resource = require('../models/Resource');

// @desc    Get all resources
// @route   GET /api/resources
// @access  Public
const getResources = async (req, res) => {
  try {
    const resources = await Resource.find({});
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create resource
// @route   POST /api/resources
// @access  Private/Admin/Mentor
const createResource = async (req, res) => {
  try {
    const { title, description, type, url, category, accessLevel } = req.body;
    const resource = await Resource.create({
      title, description, type, url, category, accessLevel
    });
    res.status(201).json(resource);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getResources, createResource };