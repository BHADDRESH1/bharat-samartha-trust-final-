
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, Button } from '../components/ui/Shared';
import { PageTransition } from '../components/ui/Motion';
import { X, CheckCircle2, ShieldCheck, Landmark } from 'lucide-react';

import api from '../lib/api';

// ... (imports remain)

const DonatePage: React.FC = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [isMonthly, setIsMonthly] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    pan: ''
  });

  const amounts = [500, 1000, 2500, 5000, 10000];

  // ... (existing code)

  const handlePaymentConfirmed = async () => {
    try {
      await api.post('/donations', {
        amount,
        isRecurring: isMonthly,
        paymentMethod: 'UPI',
        donorName: userDetails.name,
        donorEmail: userDetails.email,
        donorPhone: userDetails.phone,
        donorPan: userDetails.pan
      });
      setShowQR(false);
      setShowThankYou(true);
      setUserDetails({ name: '', email: '', phone: '', pan: '' }); // Reset form
    } catch (error) {
      console.error("Donation failed", error);
      alert("Failed to record donation. Please try again.");
    }
  };

  return (
    <PageTransition className="bg-white py-12 min-h-screen">
      {/* ... (existing JSX) ... */}

      {/* Payment QR Modal */}
      <AnimatePresence>
        {showQR && (
          // ... (existing QR Modal code) ...
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQR(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-[420px] bg-[#f8fbff] rounded-[32px] overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowQR(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="p-8 pt-10 text-center">
                {/* Profile Section */}
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden bg-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Dr. Veeramani"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-[#1e293b] font-bold text-lg tracking-tight">Dr.VEERAMANI THANGAVEL</h3>
                </div>

                {/* QR Code Container */}
                <div className="bg-white p-6 rounded-[40px] shadow-xl shadow-slate-200/50 mb-8 mx-auto w-fit relative group">
                  <div className="relative">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=veeramaniphd-1@okaxis&pn=Dr%20VEERAMANI%20THANGAVEL&cu=INR&am=${amount}`}
                      alt="Payment QR Code"
                      className="w-56 h-56"
                    />
                    {/* GPay/UPI Center Logo Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-sm p-1 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-full h-full text-[#14b8a6]" fill="currentColor">
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 10 10 10-4.48 10-10S17.51 2 11.99 2zm4.59 14.59L15 18l-3-3-3 3-1.59-1.59L10.41 13.4l-3-3L9 8.82l3 3 3-3 1.59 1.59-3 3 3 3.18z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* UPI Details */}
                <div className="space-y-1 mb-8">
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Amount to Pay</p>
                  <p className="text-3xl font-black text-[#1e293b]">₹{amount.toLocaleString()}</p>
                </div>

                <div className="bg-slate-100 rounded-2xl py-3 px-6 inline-block mb-10 border border-slate-200/50">
                  <p className="text-slate-600 font-bold text-sm tracking-tight">
                    UPI ID: <span className="text-slate-900">veeramaniphd-1@okaxis</span>
                  </p>
                </div>

                <p className="text-slate-400 font-medium text-sm">Scan to pay with any UPI app</p>

                {/* Brand Symbols */}
                <div className="mt-6 flex justify-center gap-4 opacity-30 grayscale mb-6">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo.png" alt="UPI" className="h-4 w-auto" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Pay_Logo.svg" alt="GPay" className="h-4 w-auto" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" alt="PhonePe" className="h-4 w-auto" />
                </div>

                {/* Confirm Payment Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePaymentConfirmed}
                  className="w-full py-4 rounded-xl bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold text-lg shadow-lg shadow-[#14b8a6]/30 transition-all"
                >
                  I Have Made the Payment
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Thank You Modal */}
        {showThankYou && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowThankYou(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-sm bg-white rounded-3xl p-8 text-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h2>
              <p className="text-slate-600 mb-8">Your contribution has been received. A receipt will be sent to your email shortly.</p>
              <Button onClick={() => setShowThankYou(false)} className="w-full py-3 text-lg">Close</Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default DonatePage;
