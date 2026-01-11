import React from 'react';
import { SectionHeader, Card, Button, Badge } from '../components/ui/Shared';
import { Book, Video, Download, PlayCircle } from 'lucide-react';
import { PageTransition, StaggerContainer, FadeInItem, RevealSection } from '../components/ui/Motion';
import { motion } from 'framer-motion';

import { useState, useEffect } from 'react';

interface Resource {
  _id: string;
  type: 'book' | 'video';
  title: string;
  author: string;
  tag: string;
  url: string;
}

const mockResources: Resource[] = [
  { _id: '1', type: 'book', title: 'Basic Mathematics', author: 'NCERT', tag: 'Class 10', url: 'https://ncert.nic.in/textbook/pdf/jemh101.pdf' },
  { _id: '2', type: 'book', title: 'Indian Constitution', author: 'Legal Cell', tag: 'General', url: 'https://legislative.gov.in/constitution-of-india' },
  { _id: '3', type: 'video', title: 'English Speaking 101', author: 'Prof. Sharma', tag: 'Skill', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  { _id: '4', type: 'book', title: 'Science Experiments', author: 'OpenSource', tag: 'Class 8', url: 'https://ncert.nic.in/textbook/pdf/hesc101.pdf' },
  { _id: '5', type: 'video', title: 'Computer Basics', author: 'Tech Team', tag: 'Digital Lit', url: 'https://www.youtube.com/watch?v=CxwJrzEdw1U' },
  { _id: '6', type: 'book', title: 'History of India', author: 'History Dept', tag: 'Class 12', url: 'https://ncert.nic.in/textbook/pdf/lehs101.pdf' },
  { _id: '7', type: 'video', title: 'Organic Farming', author: 'Agri Wing', tag: 'Agriculture', url: 'https://www.youtube.com/watch?v=example' },
  { _id: '8', type: 'book', title: 'Legal Rights 101', author: 'Legal Aid', tag: 'Legal', url: 'https://nalsa.gov.in/services/legal-aid/legal-services' },
];

const ResourcesPage: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>(mockResources);

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <PageTransition className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Knowledge Hub" subtitle="Free educational resources for students and community members." />

        {/* Tabs (Visual only) */}
        <RevealSection className="flex border-b border-slate-200 mb-8 overflow-x-auto">
          <button className="px-6 py-3 border-b-2 border-trust-600 text-trust-700 font-bold text-sm whitespace-nowrap">All Resources</button>
          <button className="px-6 py-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-sm whitespace-nowrap transition-colors">E-Books</button>
          <button className="px-6 py-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-sm whitespace-nowrap transition-colors">Video Lectures</button>
        </RevealSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((item, i) => (
            <FadeInItem key={i}>
              <Card className="flex flex-col h-full hover:shadow-lg transition-shadow group">
                <div className="h-40 bg-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-300 transition-colors cursor-pointer" onClick={() => handleDownload(item.url)}>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    {item.type === 'book' ? <Book size={48} /> : <Video size={48} />}
                  </motion.div>
                </div>
                <div className="p-4 flex-1">
                  <Badge variant="neutral" className="mb-2">{item.tag}</Badge>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 mb-4">{item.author}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-trust-50 group-hover:border-trust-200 group-hover:text-trust-700 transition-colors"
                    onClick={() => handleDownload(item.url)}
                  >
                    {item.type === 'book' ? <><Download size={14} className="mr-2" /> Download</> : <><PlayCircle size={14} className="mr-2" /> Watch</>}
                  </Button>
                </div>
              </Card>
            </FadeInItem>
          ))}
        </StaggerContainer>
      </div>
    </PageTransition>
  );
};


export default ResourcesPage;
