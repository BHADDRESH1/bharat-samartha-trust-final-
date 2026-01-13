
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, Button } from '../components/ui/Shared';
import { PageTransition } from '../components/ui/Motion';
import { X, CheckCircle2, ShieldCheck, Landmark, Heart, IndianRupee } from 'lucide-react';
import api from '../lib/api';



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
    } catch (error: any) {
      console.error("Donation failed", error);
      const errorMessage = error.response?.data?.message || error.message || "Unknown error";
      alert(`Failed to record donation. Error: ${errorMessage}`);
    }
  };

  return (
    <PageTransition className="bg-white py-12 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block p-3 rounded-2xl bg-orange-50 mb-4"
          >
            <Heart className="text-orange-600 w-8 h-8" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Make a Difference Today
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Your contribution directly supports our mission to empower rural India through education,
            healthcare, and sustainable development. Every rupee counts.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto mb-16">
          {/* Donation Form Column */}
          <div className="lg:col-span-8">
            <Card className="p-8 border-none shadow-xl shadow-slate-200/50 bg-white rounded-3xl">
              {/* Amount Selection */}
              <div className="mb-8">
                <label className="block text-slate-700 font-bold mb-4 text-lg">Select Donation Amount</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {amounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setAmount(amt)}
                      className={`py-4 px-6 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] ${amount === amt
                        ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30 ring-2 ring-orange-600 ring-offset-2'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                        }`}
                    >
                      ₹{amt.toLocaleString()}
                    </button>
                  ))}
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                    <input
                      type="number"
                      placeholder="Custom"
                      value={amount || ''}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full h-full min-h-[60px] pl-8 pr-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:ring-0 font-bold text-slate-900 outline-none transition-all placeholder:font-normal"
                    />
                  </div>
                </div>
              </div>

              {/* Donor Details */}
              <div className="space-y-6 mb-8">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="text-orange-600" size={24} />
                  Your Details
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input
                      type="text"
                      value={userDetails.name}
                      onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                      className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input
                      type="email"
                      value={userDetails.email}
                      onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                      className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                    <input
                      type="tel"
                      value={userDetails.phone}
                      onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                      className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">PAN Card (Optional)</label>
                    <input
                      type="text"
                      value={userDetails.pan}
                      onChange={(e) => setUserDetails({ ...userDetails, pan: e.target.value })}
                      className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none"
                      placeholder="ABCD1234E"
                    />
                    <p className="text-xs text-slate-400">Required for 80G tax exemption certificate</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowQR(true)}
                disabled={!amount || !userDetails.name || !userDetails.phone}
                className="w-full py-5 rounded-2xl bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold text-xl shadow-xl shadow-[#14b8a6]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <span>Proceed to Pay</span>
                <span className="bg-white/20 px-3 py-1 rounded-lg text-sm">₹{amount?.toLocaleString()}</span>
              </motion.button>

              <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 text-sm">
                <ShieldCheck size={16} />
                <span>Secure Payment via UPI Gateway</span>
              </div>
            </Card>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-6 bg-[#f8fbff] border border-blue-100 rounded-3xl">
              <h3 className="text-lg font-bold text-[#1e293b] mb-4 flex items-center gap-2">
                <Landmark className="text-blue-600" />
                Bank Transfer Details
              </h3>
              <div className="space-y-4 text-sm text-slate-600">
                <div className="p-4 bg-white rounded-xl border border-blue-50">
                  <p className="font-semibold text-slate-900">Account Name</p>
                  <p>BHARAT SAMARTHA TRUST</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-blue-50">
                  <p className="font-semibold text-slate-900">Account Number</p>
                  <p>50200086580971</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-blue-50">
                  <p className="font-semibold text-slate-900">IFSC Code</p>
                  <p>HDFC0000249</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-blue-50">
                  <p className="font-semibold text-slate-900">Branch</p>
                  <p>KORAMANAGALA, BENGALURU</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-orange-50 border border-orange-100 rounded-3xl">
              <h3 className="text-lg font-bold text-orange-900 mb-2">Tax Exemption</h3>
              <p className="text-orange-800/80 text-sm leading-relaxed">
                All donations to Bharat Samartha Trust are eligible for tax exemption under Section 80G of the Income Tax Act.
                You will receive your tax exemption certificate via email within 48 hours.
              </p>
            </Card>
          </div>
        </div>



      </div>

      {/* Payment QR Modal */}
      <AnimatePresence>
        {showQR && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
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
              className="relative w-full max-w-[420px] bg-[#f8fbff] rounded-[32px] overflow-hidden shadow-2xl z-20"
            >
              <button
                onClick={() => setShowQR(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="p-8 pt-10 text-center">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden bg-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Trust Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#1e293b] font-bold text-lg tracking-tight">BHARAT SAMARTHA TRUST</h3>
                    <p className="text-xs text-slate-500 font-medium">Verified Merchant</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-[40px] shadow-xl shadow-slate-200/50 mb-8 mx-auto w-fit relative group">
                  <div className="relative">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=veeramaniphd-1@okaxis&pn=BHARAT%20SAMARTHA%20TRUST&cu=INR&am=${amount}`}
                      alt="Payment QR Code"
                      className="w-56 h-56"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 bg-white rounded-lg shadow-sm p-1 flex items-center justify-center">
                        <IndianRupee className="text-[#14b8a6]" size={24} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1 mb-8">
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Amount to Pay</p>
                  <p className="text-3xl font-black text-[#1e293b]">₹{amount.toLocaleString()}</p>
                </div>

                <div className="bg-slate-100 rounded-2xl py-3 px-6 inline-block mb-10 border border-slate-200/50">
                  <p className="text-slate-600 font-bold text-sm tracking-tight">
                    UPI ID: <span className="text-slate-900">veeramaniphd-1@okaxis</span>
                  </p>
                </div>

                <p className="text-slate-400 font-medium text-sm mb-6">Scan to pay with any UPI app</p>

                <div className="flex justify-center gap-4 opacity-30 grayscale mb-8">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo.png" alt="UPI" className="h-5 w-auto" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Pay_Logo.svg" alt="GPay" className="h-5 w-auto" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" alt="PhonePe" className="h-5 w-auto" />
                </div>

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
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
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
              className="relative w-full max-w-sm bg-white rounded-3xl p-8 text-center shadow-2xl z-20"
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
