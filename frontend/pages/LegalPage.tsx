import React from 'react';
import { SectionHeader, Card, Input, Button } from '../components/ui/Shared';
import { Scale, FileText, Shield, ArrowRight } from 'lucide-react';
import { PageTransition, StaggerContainer, FadeInItem, RevealSection } from '../components/ui/Motion';
import { motion } from 'framer-motion';

const LegalPage: React.FC = () => {
  return (
    <PageTransition className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', delay: 0.1 }}
          >
            <Scale size={48} className="mx-auto mb-4 text-saffron-500" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            Justice Should Not Be a Privilege
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            We provide free legal counsel and representation to marginalized communities, ensuring their rights are protected.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* How it works */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { step: 1, title: 'Submit Request', desc: 'Fill out the form below with details of your legal issue.' },
            { step: 2, title: 'Case Review', desc: 'Our legal team reviews the merit and eligibility of your case.' },
            { step: 3, title: 'Legal Assignment', desc: 'A pro-bono lawyer is assigned to guide and represent you.' },
          ].map((item, i) => (
            <FadeInItem key={i} className="text-center p-6">
              <div className="w-12 h-12 bg-trust-100 text-trust-700 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-sm">
                {item.step}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </FadeInItem>
          ))}
        </StaggerContainer>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <RevealSection delay={0.2}>
            <Card className="p-8 border-t-4 border-trust-600 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Request Legal Assistance</h2>
              <form className="space-y-4">
                <Input label="Full Name" placeholder="Your Name" />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Phone" placeholder="Mobile Number" />
                  <Input label="City" placeholder="Current Location" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Type of Issue</label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-500 bg-white transition-shadow">
                    <option>Domestic Violence</option>
                    <option>Property / Land Dispute</option>
                    <option>Labor Rights / Wages</option>
                    <option>Police Harassment</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                  <textarea className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-500 h-32 transition-shadow" placeholder="Briefly describe your situation..."></textarea>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-slate-50 p-3 rounded border border-dashed border-slate-300 text-center cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <p className="text-sm text-slate-500">Upload supporting documents (Optional)</p>
                </motion.div>
                <Button className="w-full mt-4">Submit Request</Button>
              </form>
            </Card>
          </RevealSection>

          {/* Resources */}
          <div className="space-y-6">
            <RevealSection delay={0.3}>
              <h2 className="text-2xl font-bold text-slate-900">Legal Resources</h2>
            </RevealSection>
            <StaggerContainer className="space-y-4">
              {[
                'Know Your Rights: Police Arrest Guidelines',
                'Women\'s Rights in Domestic Property',
                'RTI Application Guide 2024',
                'Labor Laws Summary for Daily Wagers'
              ].map((res, i) => (
                <FadeInItem key={i}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-lg hover:border-trust-400 cursor-pointer group transition-colors"
                  >
                    <div className="flex items-center">
                      <FileText className="text-trust-600 mr-3" size={20} />
                      <span className="font-medium text-slate-800 group-hover:text-trust-700">{res}</span>
                    </div>
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-trust-600" />
                  </motion.div>
                </FadeInItem>
              ))}
            </StaggerContainer>

            <RevealSection delay={0.5}>
              <div className="bg-saffron-50 p-6 rounded-lg border border-saffron-100 mt-8">
                <h3 className="font-bold text-saffron-800 mb-2 flex items-center"><Shield className="mr-2" size={18} /> Emergency Helpline</h3>
                <p className="text-sm text-saffron-700 mb-4">For immediate legal intervention in cases of violence or illegal detention.</p>
                <div className="text-2xl font-bold text-saffron-900">+91 90803 81686</div>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default LegalPage;
