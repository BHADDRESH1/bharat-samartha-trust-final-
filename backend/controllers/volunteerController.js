const VolunteerApplication = require('../models/VolunteerApplication');
const cloudinary = require('../config/cloudinary');

// @desc    Submit application
// @route   POST /api/volunteers/apply
// @access  Private
const applyVolunteer = async (req, res) => {
  try {
    const { skills, availability, areasOfInterest } = req.body;
    
    // Check if already applied
    const existingApp = await VolunteerApplication.findOne({ user: req.user._id });
    if(existingApp) {
        return res.status(400).json({ message: 'Application already submitted' });
    }

    let idProofUrl = '';
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      idProofUrl = result.secure_url;
    }

    const application = new VolunteerApplication({
      user: req.user._id,
      skills: JSON.parse(skills), // assuming array sent as string
      availability,
      areasOfInterest: JSON.parse(areasOfInterest),
      idProofUrl
    });

    const createdApp = await application.save();
    res.status(201).json(createdApp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all applications
// @route   GET /api/volunteers
// @access  Private/Admin
const getApplications = async (req, res) => {
  try {
    const apps = await VolunteerApplication.find({}).populate('user', 'name email phone');
    res.json(apps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update application status
// @route   PUT /api/volunteers/:id
// @access  Private/Admin
const updateApplicationStatus = async (req, res) => {
  try {
    const app = await VolunteerApplication.findById(req.params.id);
    if (app) {
      app.status = req.body.status || app.status;
      const updatedApp = await app.save();
      
      // Optionally update User role if approved
      if(req.body.status === 'Approved') {
          const User = require('../models/User');
          await User.findByIdAndUpdate(app.user, { role: 'Volunteer' });
      }

      res.json(updatedApp);
    } else {
      res.status(404).json({ message: 'Application not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { applyVolunteer, getApplications, updateApplicationStatus };