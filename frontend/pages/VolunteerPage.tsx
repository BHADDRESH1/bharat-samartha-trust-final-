import React from 'react';
import { SectionHeader, Card, Input, Button } from '../components/ui/Shared';
import { Users, Clock, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { PageTransition, StaggerContainer, FadeInItem, RevealSection } from '../components/ui/Motion';

const VolunteerPage: React.FC = () => {
  return (
    <PageTransition className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <RevealSection className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Join Our Volunteer Force</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Dedicate your time and skills to transform lives. We have opportunities for everyone, from field work to digital support.
          </p>
        </RevealSection>

        {/* Benefits Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <FadeInItem>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Impact</h3>
              <p className="text-slate-600">Work directly with beneficiaries and see the change happen.</p>
            </Card>
          </FadeInItem>
          <FadeInItem>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Hours</h3>
              <p className="text-slate-600">Contribute as little as 2 hours a week, on weekends or remotely.</p>
            </Card>
          </FadeInItem>
          <FadeInItem>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Recognition</h3>
              <p className="text-slate-600">Receive certificates and recommendation letters for your service.</p>
            </Card>
          </FadeInItem>
        </StaggerContainer>

        {/* Form Section */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form */}
          <RevealSection delay={0.2} className="lg:w-2/3">
            <Card className="p-8 shadow-md border-t-4 border-trust-600">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">Volunteer Application</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="First Name" placeholder="John" />
                  <Input label="Last Name" placeholder="Doe" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Email" type="email" placeholder="john@example.com" />
                  <Input label="Phone" type="tel" placeholder="+91 98765 43210" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Areas of Interest</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Teaching', 'Legal Aid', 'Event Management', 'Social Media', 'Medical Camps', 'Fundraising'].map(skill => (
                      <label key={skill} className="flex items-center space-x-2 border p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                        <input type="checkbox" className="rounded text-trust-600 focus:ring-trust-500" />
                        <span className="text-sm text-slate-700">{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Why do you want to join us?</label>
                  <textarea className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-500 h-32 transition-shadow" placeholder="Tell us a bit about yourself..."></textarea>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <Button size="lg" className="w-full md:w-auto">Submit Application</Button>
                </div>
              </form>
            </Card>
          </RevealSection>

          {/* Sidebar Roles */}
          <div className="lg:w-1/3 space-y-6">
            <RevealSection delay={0.4}>
              <h3 className="text-xl font-bold text-slate-900">Current Openings</h3>
            </RevealSection>
            <StaggerContainer className="space-y-4">
              {[
                { role: 'Math Tutor', loc: 'Remote / Hybrid', time: '4 hrs/week' },
                { role: 'Legal Documentation Assistant', loc: 'Chennai', time: '10 hrs/week' },
                { role: 'Content Writer', loc: 'Remote', time: 'Flexible' },
              ].map((job, i) => (
                <FadeInItem key={i}>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-trust-300 transition-colors">
                    <h4 className="font-bold text-trust-800">{job.role}</h4>
                    <div className="flex items-center text-sm text-slate-500 mt-2 space-x-4">
                      <span>{job.loc}</span>
                      <span>•</span>
                      <span>{job.time}</span>
                    </div>
                    <button className="text-sm font-medium text-saffron-600 mt-3 hover:underline">View Details</button>
                  </div>
                </FadeInItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default VolunteerPage;
