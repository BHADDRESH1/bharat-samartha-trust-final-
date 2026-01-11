import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/Shared';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img src="/logo.jpg" alt="BST" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold text-white">Bharat Samartha Trust</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering communities through education, legal support, and sustainable development. We are dedicated to building a resilient and self-reliant society.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-saffron-500 transition-colors font-medium">About Us</Link></li>
              <li><Link to="/causes" className="hover:text-saffron-500 transition-colors font-medium">Our Causes</Link></li>
              <li><Link to="/impact" className="hover:text-saffron-500 transition-colors font-medium">Impact Reports</Link></li>
              <li><Link to="/transparency" className="hover:text-saffron-500 transition-colors font-medium">Transparency</Link></li>
              <li><Link to="/legal" className="hover:text-saffron-500 transition-colors font-medium">Legal Aid</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-0.5 text-trust-500 flex-shrink-0" />
                <span className="leading-relaxed">No 4/228 Main Road North Street,<br />Mullukurichi Village, Sendhurai,<br />Ariyalur District, Tamil Nadu 621719</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-trust-500 flex-shrink-0" />
                <span>+91 90803 81686</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-trust-500 flex-shrink-0" />
                <span className="break-all">bharatsamarthatrust@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm text-slate-400 mb-4">Subscribe for updates on our latest drives and stories.</p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-trust-500 text-white placeholder-slate-500 text-sm"
              />
              <Button variant="primary" size="sm" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Bharat Samartha Trust. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-white">Terms of Use</Link>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;