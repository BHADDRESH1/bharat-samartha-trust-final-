const mongoose = require('mongoose');

const resourceSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  type: { type: String, enum: ['E-Book', 'Video Lecture', 'Article'], required: true },
  url: { type: String, required: true },
  category: { type: String },
  accessLevel: { type: String, enum: ['Public', 'Student', 'Mentor'], default: 'Public' }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Resource', resourceSchema);