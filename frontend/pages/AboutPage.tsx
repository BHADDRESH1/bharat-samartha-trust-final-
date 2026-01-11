import React from 'react';
import { SectionHeader, Card, Badge } from '../components/ui/Shared.tsx';
import { PageTransition, RevealSection, StaggerContainer, FadeInItem } from '../components/ui/Motion.tsx';
import { Heart, Target, Eye, Users, ShieldCheck, Mail, Phone, MapPin, Quote, Landmark, Scale, History, Globe, Sparkles, Briefcase, GraduationCap, Handshake, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <PageTransition className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0f172a] py-24 lg:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80"
            alt="About background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block mb-8"
          >
            <Badge variant="success" className="bg-trust-700 text-white border-none py-2 px-6 text-sm tracking-[0.3em] uppercase font-black">Our Identity</Badge>
          </motion.div>
          <h1 className="text-4xl lg:text-7xl font-black mb-8 tracking-tighter leading-none uppercase">
            Bharat Samartha <br /><span className="text-trust-500">Trust</span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Building a resilient, self-reliant, and just society through education, legal aid, and humanitarian relief.
          </p>
        </div>
      </section>

      {/* Our Story / History Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <RevealSection className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-trust-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-saffron-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                <h2 className="text-sm font-black text-trust-700 uppercase tracking-[0.4em] mb-4">The Beginning</h2>
                <h3 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight leading-none">Our Story</h3>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    Established in 2023, <strong>Bharat Samartha Trust</strong> emerged from a profound realization: that true national strength lies in the empowerment of its most vulnerable citizens. Founded in Ariyalur, Tamil Nadu, we began as a small group of legal professionals and educators driven by a singular goal—to ensure that justice and knowledge are not luxuries, but fundamental rights accessible to all.
                  </p>
                  <p>
                    From our humble beginnings assisting local laborers with legal documentation, we have rapidly evolved into a multi-faceted humanitarian organization. Our growth is a testament to the resilience of the communities we serve and the unwavering support of our donors.
                  </p>
                </div>
              </div>
            </RevealSection>

            <RevealSection className="lg:w-1/2" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 rounded-3xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-500">
                    <img src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&w=600&q=80" alt="History 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-64 rounded-3xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-500 bg-trust-700 flex flex-col justify-end p-6 text-white">
                    <History size={40} className="mb-4 opacity-50" />
                    <p className="text-2xl font-black">EST. 2023</p>
                    <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Ariyalur, Tamil Nadu</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-64 rounded-3xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-500">
                    <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600&q=80" alt="History 2" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-48 rounded-3xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-500 bg-saffron-500 p-6 text-white">
                    <Globe size={40} className="mb-4 opacity-50" />
                    <p className="text-xl font-black">Social Impact</p>
                    <p className="text-xs font-bold opacity-80 uppercase tracking-widest">Serving Communities</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <RevealSection delay={0.1}>
              <Card className="p-12 h-full border-l-8 border-trust-600 bg-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                  <Target size={180} />
                </div>
                <Target className="text-trust-600 mb-8" size={64} />
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Our Mission</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-lg font-medium">
                  <p>
                    Our mission is to <strong>dismantle barriers</strong> to progress by providing immediate relief and long-term empowerment tools. We aim to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-trust-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <ShieldCheck className="w-4 h-4 text-trust-700" />
                      </div>
                      <span>Provide high-quality educational resources to rural students.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-trust-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <ShieldCheck className="w-4 h-4 text-trust-700" />
                      </div>
                      <span>Offer expert legal guidance to the marginalized for absolute justice.</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </RevealSection>

            <RevealSection delay={0.3}>
              <Card className="p-12 h-full border-l-8 border-saffron-500 bg-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                  <Eye size={180} />
                </div>
                <Eye className="text-saffron-500 mb-8" size={64} />
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Our Vision</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-lg font-medium">
                  <p>
                    We envision a <strong>Bharat</strong> where socio-economic status is never a hurdle to human dignity. Our long-term goal is to foster:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-saffron-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Sparkles className="w-4 h-4 text-saffron-600" />
                      </div>
                      <span>A self-reliant society where every citizen knows their rights.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-saffron-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Sparkles className="w-4 h-4 text-saffron-600" />
                      </div>
                      <span>Equity in education and justice across the urban-rural divide.</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Founder Section */}
          <div className="flex flex-col lg:flex-row items-start gap-16 mb-32">
            <RevealSection className="lg:w-2/5">
              <div className="relative sticky top-24">
                <div className="absolute -top-8 -left-8 w-48 h-48 bg-trust-100 rounded-3xl -z-10 opacity-40"></div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-saffron-100 rounded-3xl -z-10 opacity-40"></div>

                <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
                  <img
                    src="/founder.jpg"
                    alt="Dr. T. Veeramani"
                    className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = "https://ui-avatars.com/api/?name=Dr+T+Veeramani&background=0f766e&color=fff&size=512";
                    }}
                  />
                </div>

                <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-[220px] hidden md:block">
                  <p className="text-slate-900 font-black text-sm uppercase leading-tight mb-2">Educationist & Reformer</p>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Founder & Managing Trustee</p>
                </div>
              </div>
            </RevealSection>

            <RevealSection className="lg:w-3/5 space-y-8">
              <div className="inline-block px-5 py-2 bg-trust-50 text-trust-700 rounded-full text-sm font-black uppercase tracking-widest border border-trust-100">Visionary Leadership</div>

              <div className="space-y-2">
                <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Founder & <br /><span className="text-trust-700">Managing Trustee</span></h2>
                <h3 className="text-2xl font-bold text-slate-800">Dr. T. Veeramani</h3>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">B.E., M.E., Ph.D. (CSE), MBA, LLB</p>
              </div>

              <div className="relative pt-6">
                <Quote className="absolute -top-4 -left-10 text-slate-100" size={80} />
                <p className="text-xl font-bold text-slate-800 leading-snug relative z-10 italic">
                  "Empowering Rural India through Education, Technology, and Justice."
                </p>
              </div>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  Dr. T. Veeramani is the Founder and Managing Trustee of <strong>Bharat Samartha Trust</strong>, dedicated to empowering rural and underprivileged communities through education, technology, legal awareness, and sustainable development.
                </p>
                <p>
                  With over 16 years of academic and professional experience, he holds B.E., M.E., Ph.D. in Computer Science and Engineering, along with MBA and LLB. He strongly believes that education is the foundation for national development.
                </p>
                <p>
                  His vision is to create a Gurukul-based education system, along with agricultural, nursing, and skill development institutions that uplift village youth and farmers.
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <p className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Active Focus Areas</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Improve rural education quality",
                      "Support farmers & agricultural innovation",
                      "Provide legal awareness & justice access",
                      "Promote skill development & entrepreneurship",
                      "Encourage research & social responsibility"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-trust-500"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p>
                  His leadership combines academic excellence, social service, and ethical values, aiming to build a self-reliant and knowledge-driven society.
                </p>
              </div>

              <div className="pt-6 flex flex-wrap gap-6">
                <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 bg-trust-700 rounded-full flex items-center justify-center text-white">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</p>
                    <p className="font-bold text-slate-800 text-sm">bharatsamarthatrust@gmail.com</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Board of Trustees */}
          <div className="border-t border-slate-200 pt-24">
            <div className="text-center mb-16">
              <h3 className="text-sm font-black text-saffron-600 uppercase tracking-[0.4em] mb-4">Our Pillars</h3>
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">Board of Trustees</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Trustee 1 */}
              <RevealSection className="flex flex-col md:flex-row gap-8 items-start bg-slate-50 p-8 rounded-[32px] border border-slate-100 hover:shadow-xl transition-shadow duration-500">
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-slate-200">
                    <img
                      src="/minnalkodi.png"
                      alt="Ms. Minnalkodi"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://ui-avatars.com/api/?name=Minnalkodi+Thangavel&background=random&size=512";
                      }}
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Ms. Minnalkodi</h3>
                    <p className="text-trust-600 font-bold uppercase tracking-widest text-xs">Trustee Member</p>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Ms. Minnalkodi Thangavel is deeply committed to the welfare of women, children, and rural communities. She plays an important role in guiding the Trust’s social and educational activities with compassion and responsibility.
                  </p>
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-800 mb-3 text-xs uppercase tracking-widest">Key Focus</p>
                    <ul className="space-y-2">
                      {[
                        "Women empowerment & self-help groups",
                        "Child education & welfare",
                        "Health & hygiene awareness",
                        "Community development"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-500">
                          <Heart size={12} className="text-rose-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-slate-600 text-sm italic">
                    "Women empowerment, education, and moral values are the pillars of a healthy society."
                  </p>
                </div>
              </RevealSection>

              {/* Trustee 2 */}
              <RevealSection className="flex flex-col md:flex-row gap-8 items-start bg-slate-50 p-8 rounded-[32px] border border-slate-100 hover:shadow-xl transition-shadow duration-500" delay={0.2}>
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-slate-200">
                    <img
                      src="/thangavel.jpg"
                      alt="Thiru Thangavel Visuvanathan"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://ui-avatars.com/api/?name=Thangavel+Visuvanathan&background=random&size=512";
                      }}
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Thiru Thangavel Visuvanathan</h3>
                    <p className="text-trust-600 font-bold uppercase tracking-widest text-xs">Trustee Member</p>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    A dedicated farmer with deep roots in rural life and agriculture. With decades of experience in farming and village development, he brings practical knowledge and strong community values to the Trust.
                  </p>
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-800 mb-3 text-xs uppercase tracking-widest">Key Initiatives</p>
                    <ul className="space-y-2">
                      {[
                        "Farmer welfare & sustainable agriculture",
                        "Rural development & livelihood support",
                        "Traditional values & ethical living",
                        "Community upliftment"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-500">
                          <Globe size={12} className="text-green-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-slate-600 text-sm italic">
                    "Agriculture, education, and self-reliance are the foundations of a strong nation."
                  </p>
                </div>
              </RevealSection>
            </div>
          </div>

        </div>
      </section>



      {/* Partnerships Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
            <div className="lg:w-1/2">
              <h3 className="text-sm font-black text-saffron-600 uppercase tracking-[0.4em] mb-4">Collaboration</h3>
              <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Our Partners & Alliances</h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">
                We believe in the power of collective action. By partnering with organizations that share our values, we amplify our impact and reach more lives than ever before.
              </p>
            </div>
            <div className="lg:w-auto">
              <motion.div whileHover={{ scale: 1.05 }} className="bg-saffron-50 p-8 rounded-[32px] border-2 border-dashed border-saffron-200">
                <Handshake className="text-saffron-500 mx-auto mb-4" size={48} />
                <p className="text-saffron-900 font-bold text-center">Interested in Partnering?</p>
                <button className="mt-4 w-full bg-saffron-500 hover:bg-saffron-600 text-white font-black py-3 px-8 rounded-2xl transition-all shadow-lg shadow-saffron-500/20 flex items-center justify-center gap-2">
                  Get in Touch <ExternalLink size={16} />
                </button>
              </motion.div>
            </div>
          </RevealSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Legal Aid Soc.", type: "Pro-Bono Support" },
              { name: "EduGrow India", type: "Learning Tech" },
              { name: "Relief Corp", type: "Logistics Partner" },
              { name: "Ariyalur Schools", type: "Local Outreach" }
            ].map((partner, i) => (
              <FadeInItem key={i}>
                <div className="h-40 flex flex-col items-center justify-center p-6 bg-slate-50 rounded-3xl border border-slate-100 grayscale hover:grayscale-0 hover:bg-white hover:shadow-lg transition-all duration-500 text-center">
                  <div className="w-12 h-12 bg-slate-200 rounded-xl mb-4 flex items-center justify-center text-slate-400 font-black">LGO</div>
                  <h4 className="text-slate-900 font-black uppercase tracking-tighter mb-1">{partner.name}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{partner.type}</p>
                </div>
              </FadeInItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-sm font-black text-trust-500 uppercase tracking-[0.4em] mb-4">Core Values</h3>
            <h2 className="text-4xl font-black tracking-tight uppercase">What Drives Us</h2>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Landmark, title: "Integrity", desc: "Absolute transparency in all our financial and social operations." },
              { icon: Heart, title: "Compassion", desc: "At the heart of every initiative is genuine empathy for our brothers and sisters." },
              { icon: Scale, title: "Justice", desc: "Ensuring that the law serves the most vulnerable just as it serves the powerful." },
              { icon: ShieldCheck, title: "Accountability", desc: "We are answerable to our donors, our volunteers, and most importantly, our beneficiaries." }
            ].map((item, i) => (
              <FadeInItem key={i}>
                <div className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-colors h-full text-center">
                  <item.icon className="mx-auto mb-6 text-trust-500" size={40} />
                  <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeInItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Official Details & Tagline Footer */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-[#1e293b] mb-12 uppercase tracking-tighter">BHARAT SAMARTHA TRUST</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
              <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Registration</p>
              <p className="font-bold text-slate-800">12B, 80G Registered</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
              <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Status</p>
              <p className="font-bold text-slate-800">CSR Form 1 Available</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
              <p className="text-[10px] font-black text-slate-400 uppercase mb-1">District</p>
              <p className="font-bold text-slate-800">Ariyalur, Tamil Nadu</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
              <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Email</p>
              <p className="font-bold text-slate-800">bharatsamarthatrust@gmail.com</p>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-200">
            <p className="text-3xl font-black text-trust-700 uppercase tracking-[0.5em]">Empowering Together</p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;