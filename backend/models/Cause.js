const mongoose = require('mongoose');

const causeSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  goalAmount: { type: Number, required: true },
  raisedAmount: { type: Number, default: 0 },
  status: { type: String, enum: ['Ongoing', 'Completed', 'Urgent'], default: 'Ongoing' },
  image: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Cause', causeSchema);