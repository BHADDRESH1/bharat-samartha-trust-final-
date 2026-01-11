const mongoose = require('mongoose');

const workshopSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  mode: { type: String, enum: ['Online', 'Offline'], default: 'Online' },
  registrationLink: { type: String },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Workshop', workshopSchema);