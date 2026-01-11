import React from 'react';
import { SectionHeader, Card } from '../components/ui/Shared';
import { PageTransition, StaggerContainer, FadeInItem, RevealSection } from '../components/ui/Motion';
import { motion } from 'framer-motion';

const ImpactPage: React.FC = () => {
  return (
    <PageTransition className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Our Impact" subtitle="Real stories of change made possible by you." centered />

        <RevealSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="rounded-xl shadow-lg" alt="Impact" />
          </motion.div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">From Despair to Hope: Riya's Journey</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Riya, a bright student from a remote village in Karnataka, was on the verge of dropping out due to financial constraints. Through our Education Scholarship program, funded by donors like you, she not only completed her schooling but is now pursuing Engineering.
            </p>
            <blockquote className="border-l-4 border-trust-500 pl-4 italic text-slate-700">
              "Bharath Samarthan Trust didn't just pay my fees; they gave me the confidence to dream big."
            </blockquote>
          </div>
        </RevealSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1,2,3].map(i => (
             <FadeInItem key={i}>
               <Card className="hover:shadow-lg transition-shadow h-full">
                 <div className="h-48 bg-slate-200 overflow-hidden">
                   <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={`https://picsum.photos/seed/${i+10}/800/400`} alt="Story" className="w-full h-full object-cover" 
                   />
                 </div>
                 <div className="p-6">
                   <div className="text-xs text-trust-600 font-bold uppercase mb-2">Healthcare</div>
                   <h3 className="text-xl font-bold mb-3">Mobile Clinic Reaches 50th Village</h3>
                   <p className="text-slate-600 text-sm mb-4">Our mobile medical unit has now provided free checkups to over 5,000 elderly residents in remote hamlets.</p>
                   <a href="#" className="text-trust-700 font-medium hover:underline">Read Full Story &rarr;</a>
                 </div>
               </Card>
             </FadeInItem>
          ))}
        </StaggerContainer>
      </div>
    </PageTransition>
  );
};

export default ImpactPage;
