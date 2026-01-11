const LegalCase = require('../models/LegalCase');
const cloudinary = require('../config/cloudinary');

// @desc    Create legal case request
// @route   POST /api/legal
// @access  Private
const createCase = async (req, res) => {
  try {
    const { type, description } = req.body;
    let documents = [];

    if (req.files) {
        for(const file of req.files) {
            const result = await cloudinary.uploader.upload(file.path);
            documents.push({ name: file.originalname, url: result.secure_url });
        }
    }

    const legalCase = new LegalCase({
      applicant: req.user._id,
      type,
      description,
      documents
    });

    const createdCase = await legalCase.save();
    res.status(201).json(createdCase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get cases (Role based)
// @route   GET /api/legal
// @access  Private
const getCases = async (req, res) => {
  try {
    let query = {};
    // Applicant sees only own cases
    if (req.user.role === 'Legal Aid Applicant') {
      query = { applicant: req.user._id };
    }
    // Case Worker sees assigned cases
    else if (req.user.role === 'Legal Aid Case Worker') {
      query = { caseWorker: req.user._id };
    }
    // Admins see all
    
    const cases = await LegalCase.find(query)
      .populate('applicant', 'name email phone')
      .populate('caseWorker', 'name');
    res.json(cases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update case details/status
// @route   PUT /api/legal/:id
// @access  Private (Admin/Worker)
const updateCase = async (req, res) => {
  try {
    const { status, note, caseWorkerId } = req.body;
    const legalCase = await LegalCase.findById(req.params.id);

    if (legalCase) {
      if (status) legalCase.status = status;
      if (caseWorkerId && (req.user.role === 'Admin' || req.user.role === 'Super Admin')) {
          legalCase.caseWorker = caseWorkerId;
      }
      if (note) {
        legalCase.updates.push({
          note,
          updatedBy: req.user._id
        });
      }

      const updatedCase = await legalCase.save();
      res.json(updatedCase);
    } else {
      res.status(404).json({ message: 'Case not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createCase, getCases, updateCase };