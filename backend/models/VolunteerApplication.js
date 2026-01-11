const mongoose = require('mongoose');

const volunteerAppSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  skills: [{ type: String }],
  availability: { type: String },
  areasOfInterest: [{ type: String }],
  idProofUrl: { type: String },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
}, {
  timestamps: true,
});

module.exports = mongoose.model('VolunteerApplication', volunteerAppSchema);