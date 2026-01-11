const mongoose = require('mongoose');

const otpSchema = mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, index: { expires: 300 } } // Expire after 5 mins
});

module.exports = mongoose.model('OTP', otpSchema);