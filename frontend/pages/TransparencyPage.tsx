import React from 'react';
import { SectionHeader, Card, Button } from '../components/ui/Shared';
import { FileText, Download, Shield, ExternalLink } from 'lucide-react';
import { PageTransition, StaggerContainer, FadeInItem, RevealSection } from '../components/ui/Motion';

const TransparencyPage: React.FC = () => {
  return (
    <PageTransition className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Transparency & Accountability" 
          subtitle="We believe that trust is earned through complete openness about our finances and operations."
        />

        {/* Stats Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Funds Utilized (FY 23-24)', value: '92%', sub: 'Directly for programs' },
            { label: 'Admin Costs', value: '5%', sub: 'Operations & Salaries' },
            { label: 'Fundraising Costs', value: '3%', sub: 'Marketing & Events' }
          ].map((stat, i) => (
            <FadeInItem key={i}>
              <Card className="p-6 text-center border-t-4 border-trust-600">
                <h3 className="text-slate-500 font-medium mb-2">{stat.label}</h3>
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-xs text-slate-400 mt-2">{stat.sub}</p>
              </Card>
            </FadeInItem>
          ))}
        </StaggerContainer>

        {/* Financial Reports */}
        <RevealSection className="mb-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <FileText className="mr-2 text-trust-600" /> Annual Financial Reports
          </h3>
          <StaggerContainer className="space-y-4">
            {[2023, 2022, 2021].map(year => (
              <FadeInItem key={year}>
                <Card className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer group">
                  <div>
                    <h4 className="font-bold text-slate-800 group-hover:text-trust-700 transition-colors">Annual Report FY {year}-{year+1}</h4>
                    <p className="text-sm text-slate-500">Audited financial statements and impact summary.</p>
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Download size={16} className="mr-2" /> PDF
                  </Button>
                </Card>
              </FadeInItem>
            ))}
          </StaggerContainer>
        </RevealSection>

        {/* Registrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RevealSection delay={0.2}>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
              <Shield className="mr-2 text-trust-600" /> Legal Compliance
            </h3>
            <Card className="p-6 space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-600">Registration No</span>
                <span className="font-mono font-medium">TRUST/BLR/2010/8892</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-600">NITI Aayog Darpan ID</span>
                <span className="font-mono font-medium">KA/2018/019283</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-600">12A Registration</span>
                <span className="font-mono font-medium text-green-600">ACTIVE</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-600">80G Certificate</span>
                <span className="font-mono font-medium text-green-600">ACTIVE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">FCRA Registration</span>
                <span className="font-mono font-medium text-green-600">ACTIVE</span>
              </div>
            </Card>
          </RevealSection>

          <RevealSection delay={0.4}>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Governance</h3>
            <Card className="p-6 h-full">
              <p className="text-slate-600 mb-4">
                Bharath Samarthan Trust is governed by a Board of Trustees comprising eminent professionals from law, social work, and finance. We adhere to the strictest standards of governance and have a zero-tolerance policy towards corruption.
              </p>
              <a href="#" className="text-trust-600 font-medium hover:underline flex items-center">
                View Board Members <ExternalLink size={14} className="ml-1" />
              </a>
              <a href="#" className="text-trust-600 font-medium hover:underline flex items-center mt-2">
                Whistleblower Policy <ExternalLink size={14} className="ml-1" />
              </a>
            </Card>
          </RevealSection>
        </div>
      </div>
    </PageTransition>
  );
};

export default TransparencyPage;
