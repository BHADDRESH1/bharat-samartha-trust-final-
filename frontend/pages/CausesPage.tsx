import React from 'react';
import { SectionHeader, Card, Badge, ProgressBar, Button } from '../components/ui/Shared';
import { Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition, StaggerContainer, FadeInItem, RevealSection } from '../components/ui/Motion';
import { motion } from 'framer-motion';

import { useState, useEffect } from 'react';
import api from '../lib/api';

interface Cause {
  _id: string;
  title: string;
  description: string;
  category: string;
  goalAmount: number;
  raisedAmount?: number; // Backend might not have this field yet, assuming 0 or explicit field
  image: string;
}

const mockCauses: Cause[] = [
  {
    _id: '1',
    title: 'Flood Relief in Assam',
    description: 'Provide immediate relief kits containing food, water, and medicine to families displaced by floods in Assam. Thousands have lost their homes and livelihoods.',
    category: 'Disaster Relief',
    goalAmount: 500000,
    raisedAmount: 120000,
    image: 'https://images.unsplash.com/photo-1547625121-722a48b5947a?auto=format&fit=crop&w=800&q=80',
  },
  {
    _id: '2',
    title: 'Education for Rural Girls',
    description: 'Sponsor the education of girls in remote villages of Tamil Nadu. We provide textbooks, uniforms, and scholarships to ensure they complete their schooling.',
    category: 'Education',
    goalAmount: 500000,
    raisedAmount: 450000,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    _id: '3',
    title: 'Legal Aid for Laborers',
    description: 'Providing free legal representation and awareness workshops for daily wage laborers fighting for their rights. Help us ensure justice is accessible to everyone.',
    category: 'Legal Aid',
    goalAmount: 200000,
    raisedAmount: 50000,
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
  },
  {
    _id: '4',
    title: 'Free Health Camps',
    description: 'Organizing weekly health check-up camps in underserved rural areas. We provide free consultations, basic medicines, and diagnostics.',
    category: 'Health',
    goalAmount: 300000,
    raisedAmount: 75000,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    _id: '5',
    title: 'Sustainable Farming Workshops',
    description: 'Training farmers in organic farming techniques and water conservation. This initiative aims to improve crop yields and promote sustainable agricultural practices.',
    category: 'Education',
    goalAmount: 150000,
    raisedAmount: 30000,
    image: 'https://images.unsplash.com/photo-1625246333195-58197bd47d26?auto=format&fit=crop&w=800&q=80',
  }
];

const CausesPage: React.FC = () => {
  const [causes, setCauses] = useState<Cause[]>(mockCauses);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCauses = async () => {
      try {
        const { data } = await api.get('/causes');
        if (data && data.length > 0) {
          setCauses(data);
        }
      } catch (error) {
        console.error("Failed to fetch causes, using mock data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCauses();
  }, []);
  return (
    <PageTransition className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Our Causes" subtitle="Support the initiatives that resonate with you." />

        {/* Filter Bar */}
        <RevealSection className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-sm mb-8 gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-trust-700 text-white rounded-full text-sm font-medium whitespace-nowrap">All Causes</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-full text-sm font-medium whitespace-nowrap">Education</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-full text-sm font-medium whitespace-nowrap">Health</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-full text-sm font-medium whitespace-nowrap">Legal Aid</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-full text-sm font-medium whitespace-nowrap">Disaster Relief</motion.button>
          </div>
          <div className="flex items-center text-slate-500 text-sm">
            <Filter size={16} className="mr-2" /> Sort by: Newest
          </div>
        </RevealSection>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause, idx) => (
            <FadeInItem key={idx}>
              <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="h-56 overflow-hidden relative">
                  <Badge variant="info" className="absolute top-4 left-4 z-10">{cause.category}</Badge>
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={cause.image} alt={cause.title} className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{cause.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 flex-1">{cause.description.substring(0, 100)}...</p>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm font-semibold mb-1">
                      <span className="text-trust-700">₹{(cause.raisedAmount || 0).toLocaleString()}</span>
                      <span className="text-slate-400">of ₹{cause.goalAmount.toLocaleString()}</span>
                    </div>
                    <ProgressBar value={cause.raisedAmount || 0} max={cause.goalAmount} />
                  </div>

                  <div className="flex space-x-3">
                    <Link to="/donate" className="flex-1">
                      <Button variant="primary" size="sm" className="w-full">Donate</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </FadeInItem>
          ))}
        </StaggerContainer>
      </div>
    </PageTransition>
  );
};

export default CausesPage;
