const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
  donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  guest: {
    name: String,
    email: String,
    phone: String,
    pan: String
  },
  cause: { type: mongoose.Schema.Types.ObjectId, ref: 'Cause' },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  status: { type: String, enum: ['Success', 'Pending', 'Failed'], default: 'Pending' },
  isRecurring: { type: Boolean, default: false },
  transactionId: { type: String },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Donation', donationSchema);