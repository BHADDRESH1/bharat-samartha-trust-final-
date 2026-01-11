const Cause = require('../models/Cause');
const cloudinary = require('../config/cloudinary');

// @desc    Get all causes
// @route   GET /api/causes
// @access  Public
const getCauses = async (req, res) => {
  try {
    const causes = await Cause.find({});
    res.json(causes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get cause by ID
// @route   GET /api/causes/:id
// @access  Public
const getCauseById = async (req, res) => {
  try {
    const cause = await Cause.findById(req.params.id);
    if (cause) {
      res.json(cause);
    } else {
      res.status(404).json({ message: 'Cause not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a cause
// @route   POST /api/causes
// @access  Private/Admin
const createCause = async (req, res) => {
  try {
    let imageUrl = '';
    
    // Check if image file exists
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }

    const { title, description, category, goalAmount, status } = req.body;

    const cause = new Cause({
      title,
      description,
      category,
      goalAmount,
      status,
      image: imageUrl,
      createdBy: req.user._id
    });

    const createdCause = await cause.save();
    res.status(201).json(createdCause);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a cause
// @route   PUT /api/causes/:id
// @access  Private/Admin
const updateCause = async (req, res) => {
  try {
    const { title, description, category, goalAmount, status } = req.body;
    const cause = await Cause.findById(req.params.id);

    if (cause) {
      cause.title = title || cause.title;
      cause.description = description || cause.description;
      cause.category = category || cause.category;
      cause.goalAmount = goalAmount || cause.goalAmount;
      cause.status = status || cause.status;
      
      if(req.file) {
        const result = await cloudinary.uploader.upload(req.file.path);
        cause.image = result.secure_url;
      }

      const updatedCause = await cause.save();
      res.json(updatedCause);
    } else {
      res.status(404).json({ message: 'Cause not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a cause
// @route   DELETE /api/causes/:id
// @access  Private/Admin
const deleteCause = async (req, res) => {
  try {
    const cause = await Cause.findById(req.params.id);
    if (cause) {
      await Cause.deleteOne({ _id: req.params.id });
      res.json({ message: 'Cause removed' });
    } else {
      res.status(404).json({ message: 'Cause not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCauses, getCauseById, createCause, updateCause, deleteCause };