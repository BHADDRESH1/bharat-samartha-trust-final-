
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, BookOpen, Scale, TrendingUp } from 'lucide-react';
import { Button, Card, SectionHeader, Badge, ProgressBar } from '../components/ui/Shared';
import { motion } from 'framer-motion';
import { PageTransition, RevealSection, StaggerContainer, FadeInItem } from '../components/ui/Motion';

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469571486040-0bd501b0e471?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-trust-900 via-trust-900/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <Badge variant="warning" >🚀 Empowering 10,000+ Lives</Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-4 text-4xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Building a Just and <span className="text-saffron-500">Self-Reliant India</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-slate-200 mb-8 leading-relaxed"
            >
              We provide free legal aid, educational resources, and emergency relief to the most vulnerable communities. Join us in making a tangible difference today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/donate">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Donate Now <Heart className="ml-2 h-5 w-5 fill-current" />
                </Button>
              </Link>
              <Link to="/causes">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10 hover:text-white">
                  Explore Causes <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <RevealSection delay={0.2} className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white py-12 px-8 rounded-xl shadow-lg border border-slate-100">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Lives Impacted', value: '15,000+', icon: Users, color: 'text-blue-600' },
              { label: 'Funds Raised', value: '₹2.5 Cr+', icon: TrendingUp, color: 'text-green-600' },
              { label: 'Legal Cases', value: '450+', icon: Scale, color: 'text-trust-600' },
              { label: 'Resources Shared', value: '8,000+', icon: BookOpen, color: 'text-saffron-600' },
            ].map((stat, idx) => (
              <FadeInItem key={idx} className="text-center">
                <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl lg:text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
              </FadeInItem>
            ))}
          </StaggerContainer>
        </div>
      </RevealSection>

      {/* Featured Causes */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <SectionHeader
              title="Urgent Causes"
              subtitle="Your immediate support can change the trajectory of these initiatives."
              centered
            />
          </RevealSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Flood Relief in Assam', raised: 120000, target: 500000, img: 'https://images.unsplash.com/photo-1547625121-722a48b5947a?auto=format&fit=crop&w=800&q=80', cat: 'Disaster Relief' },
              { title: 'Education for Rural Girls', raised: 450000, target: 500000, img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80', cat: 'Education' },
              { title: 'Legal Aid for Laborers', raised: 50000, target: 200000, img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80', cat: 'Legal Aid' },
            ].map((cause, idx) => (
              <FadeInItem key={idx}>
                <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden relative">
                    <Badge variant="info" className="absolute top-4 left-4 z-10">{cause.cat}</Badge>
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      src={cause.img} alt={cause.title} className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{cause.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 flex-1">Help us provide immediate relief kits containing food, water, and medicine to over 500 families displaced by recent floods.</p>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm font-semibold mb-1">
                        <span className="text-trust-700">₹{cause.raised.toLocaleString()}</span>
                        <span className="text-slate-400">of ₹{cause.target.toLocaleString()}</span>
                      </div>
                      <ProgressBar value={cause.raised} max={cause.target} />
                    </div>

                    <div className="flex">
                      <Link to="/donate" className="w-full">
                        <Button variant="primary" size="sm" className="w-full">Donate</Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </FadeInItem>
            ))}
          </StaggerContainer>

          <div className="text-center mt-10">
            <Link to="/causes">
              <Button variant="ghost">View All Causes <ArrowRight size={16} className="ml-2" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-20 bg-trust-900 text-white">
        <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:w-1/2 pr-8">
            <h2 className="text-3xl font-bold mb-4">Be the Change You Wish to See</h2>
            <p className="text-trust-100 text-lg mb-6">Join our network of 5,000+ active volunteers. Whether you are a lawyer, teacher, doctor, or student, your skills can save lives.</p>
            <ul className="space-y-3 mb-8">
              {['Flexible hours', 'Certificate of appreciation', 'Networking opportunities', 'Real ground impact'].map((item, i) => (
                <li key={i} className="flex items-center">
                  <div className="bg-trust-700 p-1 rounded-full mr-3"><ArrowRight size={14} /></div>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/volunteer">
              <Button variant="secondary" size="lg">Join as Volunteer</Button>
            </Link>
          </div>
          <motion.div
            whileHover={{ scale: 1.02, rotate: 1 }}
            className="md:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80"
              alt="Volunteers"
              className="rounded-xl shadow-2xl border-4 border-trust-700/50"
            />
          </motion.div>
        </RevealSection>
      </section>
    </PageTransition>
  );
};

export default HomePage;
