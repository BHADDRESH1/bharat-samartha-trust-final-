import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from '../../context/AuthContext';
import {
  Menu,
  X,
  User as UserIcon,
  LogOut,
  LayoutDashboard,
  ChevronDown,
} from "lucide-react";
import { Button } from "../ui/Shared";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  // Auth removed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsProfileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Causes", path: "/causes" },
    { name: "Impact", path: "/impact" },
    { name: "Legal Aid", path: "/legal" },
    { name: "Resources", path: "/resources" },
    { name: "Transparency", path: "/transparency" },
  ];

  const getDashboardPath = (role: string) => {
    switch (role) {
      case "Super Admin":
        return "/dashboard/super-admin";
      case "Admin":
        return "/dashboard/admin";
      case "Volunteer":
        return "/dashboard/volunteer";
      case "Donor":
        return "/dashboard/donor";
      case "Mentor":
        return "/dashboard/mentor";
      case "Legal Aid Case Worker":
        return "/dashboard/legal-worker";
      case "Legal Aid Applicant":
        return "/dashboard/legal-applicant";
      case "Student":
        return "/dashboard/student";
      default:
        return "/dashboard";
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-trust-900 text-white text-xs py-2 px-4 flex justify-between items-center z-50 relative">
        <p className="font-medium truncate mr-4">
          🚨 Emergency Flood Relief Campaign - Your support saves lives!
        </p>
        <Link
          to="/donate"
          className="underline hover:text-saffron-500 font-bold whitespace-nowrap"
        >
          Donate Now
        </Link>
      </div>

      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="flex-shrink-0 flex items-center gap-2 group"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm"
                >
                  <img
                    src="/logo.jpg"
                    alt="BST Logo"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="flex flex-col">
                  <span className="font-black text-slate-900 text-lg leading-tight group-hover:text-trust-700 transition-colors uppercase tracking-tight">
                    Bharat Samartha Trust
                  </span>
                  <span className="text-[10px] text-trust-700 font-black tracking-[0.2em] uppercase">
                    Empowering Together
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative text-sm font-bold text-slate-600 hover:text-trust-700 transition-colors group uppercase tracking-tight"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-trust-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              <div className="h-6 w-px bg-slate-300 mx-2"></div>

              <div className="flex items-center space-x-3">
                <Link to="/donate">
                  <Button
                    variant="primary"
                    size="sm"
                    className="font-bold uppercase tracking-tight"
                  >
                    Donate
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-trust-700 focus:outline-none p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg absolute w-full top-20 z-50 overflow-hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-base font-bold text-slate-700 hover:bg-slate-50 hover:text-trust-700 px-3 py-2 rounded-md uppercase tracking-tight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-slate-100 pt-4 mt-2">
                <div className="grid grid-cols-1 gap-3">
                  <Link to="/donate" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      variant="primary"
                      className="w-full font-bold uppercase tracking-tight"
                    >
                      Donate
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
