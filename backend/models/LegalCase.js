const mongoose = require('mongoose');

const legalCaseSchema = mongoose.Schema({
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  caseWorker: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Under Review', 'In Progress', 'Closed'], default: 'Under Review' },
  documents: [{ name: String, url: String }],
  updates: [{
    note: String,
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
  }]
}, {
  timestamps: true,
});

module.exports = mongoose.model('LegalCase', legalCaseSchema);