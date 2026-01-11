import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import { UserRole } from '../lib/types';
import {
  LayoutDashboard,
  Users,
  FileText,
  Heart,
  BookOpen,
  Settings,
  Briefcase,
  GraduationCap,
  Bell,
  Search,
  Scale,
} from "lucide-react";
import {
  PageTransition,
  StaggerContainer,
  FadeInItem,
} from "../components/ui/Motion";

// --- Dashboard Role Views ---

// 1. Super Admin View
const SuperAdminDashboard = () => (
  <StaggerContainer className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {[
        {
          label: "Total Donations",
          val: "₹1.2Cr",
          color: "bg-green-100 text-green-700",
        },
        {
          label: "Active Volunteers",
          val: "1,420",
          color: "bg-blue-100 text-blue-700",
        },
        {
          label: "Pending Legal Cases",
          val: "45",
          color: "bg-orange-100 text-orange-700",
        },
        {
          label: "Total Users",
          val: "12,500",
          color: "bg-purple-100 text-purple-700",
        },
      ].map((s, i) => (
        <FadeInItem key={i}>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <p className="text-sm text-slate-500 font-medium">{s.label}</p>
            <p className={`text-2xl font-bold mt-2 ${s.color.split(" ")[1]}`}>
              {s.val}
            </p>
          </div>
        </FadeInItem>
      ))}
    </div>

    <FadeInItem>
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-slate-800">User Management</h3>
          <button className="text-sm text-trust-600 font-medium hover:text-trust-700">
            View All
          </button>
        </div>
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500 font-medium">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { name: "Ramesh Gupta", role: "Admin", status: "Active" },
              { name: "Sarah Khan", role: "Volunteer", status: "Active" },
              { name: "John Doe", role: "Donor", status: "Inactive" },
            ].map((u, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">{u.name}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-slate-100 rounded text-xs">
                    {u.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-green-600">{u.status}</td>
                <td className="px-6 py-4 text-trust-600 hover:underline cursor-pointer">
                  Edit
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeInItem>
  </StaggerContainer>
);

// 2. Donor Dashboard
const DonorDashboard = () => (
  <StaggerContainer className="space-y-6">
    <FadeInItem>
      <div className="bg-trust-700 rounded-xl p-8 text-white flex justify-between items-center shadow-lg">
        <div>
          <h2 className="text-2xl font-bold mb-2">Welcome back, Donor!</h2>
          <p className="opacity-90">
            Total Impact: ₹45,000 Donated • 3 Causes Supported
          </p>
        </div>
        <button className="bg-white text-trust-800 px-4 py-2 rounded-lg font-semibold hover:bg-slate-100 hover:scale-105 transition-transform">
          Donate Again
        </button>
      </div>
    </FadeInItem>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FadeInItem>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-full">
          <h3 className="font-bold text-slate-800 mb-4">Recent Donations</h3>
          <div className="space-y-4">
            {[
              { date: "Aug 12, 2023", amt: 5000, cause: "Assam Flood Relief" },
              {
                date: "Jul 01, 2023",
                amt: 2000,
                cause: "Girl Child Education",
              },
            ].map((d, i) => (
              <div
                key={i}
                className="flex justify-between items-center pb-3 border-b border-slate-50 last:border-0 last:pb-0 hover:bg-slate-50 p-2 rounded transition-colors"
              >
                <div>
                  <p className="font-medium text-slate-900">{d.cause}</p>
                  <p className="text-xs text-slate-500">{d.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-800">₹{d.amt}</p>
                  <button className="text-xs text-trust-600 hover:underline">
                    Download 80G
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInItem>

      <FadeInItem>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-full">
          <h3 className="font-bold text-slate-800 mb-4">Recurring Donations</h3>
          <div className="bg-saffron-50 border border-saffron-100 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
            <div>
              <p className="font-bold text-saffron-800">
                Monthly Education Support
              </p>
              <p className="text-sm text-saffron-600">
                ₹1,000 / month • Next: Sept 1
              </p>
            </div>
            <button className="text-sm font-medium text-saffron-700 bg-white px-3 py-1 rounded border border-saffron-200 hover:bg-saffron-50">
              Manage
            </button>
          </div>
        </div>
      </FadeInItem>
    </div>
  </StaggerContainer>
);

// 3. Legal Case Worker Dashboard
const LegalWorkerDashboard = () => (
  <StaggerContainer className="space-y-6">
    <div className="grid grid-cols-3 gap-4">
      {[
        { label: "Open Cases", val: 12, color: "text-slate-800" },
        { label: "Review Pending", val: 4, color: "text-orange-600" },
        { label: "Closed This Month", val: 8, color: "text-green-600" },
      ].map((stat, i) => (
        <FadeInItem key={i}>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-trust-300 transition-colors">
            <span className="text-slate-500 text-sm">{stat.label}</span>
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.val}</div>
          </div>
        </FadeInItem>
      ))}
    </div>

    <FadeInItem>
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <h3 className="font-bold text-slate-800">Assigned Cases</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            {
              id: "LC-2023-001",
              type: "Domestic Violence",
              applicant: "Anjali S. (Protected)",
              status: "In Progress",
              date: "2 days ago",
            },
            {
              id: "LC-2023-045",
              type: "Land Dispute",
              applicant: "Raju Kumar",
              status: "New",
              date: "5 hours ago",
            },
            {
              id: "LC-2023-089",
              type: "Labor Rights",
              applicant: "Group Petition",
              status: "Waiting Docs",
              date: "1 week ago",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs bg-slate-200 px-2 py-0.5 rounded text-slate-600">
                    {c.id}
                  </span>
                  <span className="font-medium text-slate-900">{c.type}</span>
                </div>
                <p className="text-sm text-slate-500">
                  Applicant: {c.applicant}
                </p>
              </div>
              <div className="text-right">
                <span
                  className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-1 
                  ${
                    c.status === "New"
                      ? "bg-red-100 text-red-700"
                      : c.status === "In Progress"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {c.status}
                </span>
                <p className="text-xs text-slate-400">Upd: {c.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeInItem>
  </StaggerContainer>
);

// --- Main Layout for Dashboards ---

const SidebarItem = ({ icon: Icon, label, to, active }: any) => (
  <Link
    to={to}
    className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
      active
        ? "bg-trust-50 text-trust-700 border-r-4 border-trust-700"
        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
    }`}
  >
    <Icon size={18} className="mr-3" />
    {label}
  </Link>
);

const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const getSidebarLinks = (role: UserRole) => {
    const common = [
      {
        label: "Overview",
        to: `/dashboard/${role.toLowerCase().replace(/ /g, "-")}`,
        icon: LayoutDashboard,
      },
    ];

    switch (role) {
      case UserRole.SUPER_ADMIN:
        return [
          ...common,
          { label: "Manage Users", to: "#", icon: Users },
          { label: "System Settings", to: "#", icon: Settings },
        ];
      case UserRole.DONOR:
        return [
          ...common,
          { label: "Donation History", to: "#", icon: Heart },
          { label: "Tax Receipts", to: "#", icon: FileText },
        ];
      case UserRole.LEGAL_WORKER:
        return [
          ...common,
          { label: "My Cases", to: "#", icon: Scale },
          { label: "Documents", to: "#", icon: FileText },
        ];
      default:
        return common;
    }
  };

  const links = getSidebarLinks(user.role);

  return (
    <PageTransition className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex-shrink-0 hidden md:flex flex-col z-20">
        <div className="h-16 flex items-center px-6 border-b border-slate-200">
          <span className="font-bold text-trust-800 text-lg">
            BST Dashboard
          </span>
        </div>
        <div className="p-4">
          <div className="bg-slate-100 rounded-lg p-3 flex items-center gap-3 mb-6">
            <img
              src={user.avatar}
              className="w-10 h-10 rounded-full"
              alt="avatar"
            />
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-slate-800 truncate">
                {user.name}
              </p>
              <p className="text-xs text-slate-500 truncate" title={user.role}>
                {user.role}
              </p>
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto">
          {links.map((link, i) => (
            <SidebarItem
              key={i}
              {...link}
              active={location.pathname === link.to}
            />
          ))}
          <div className="mt-6 px-6">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Account
            </p>
          </div>
          <SidebarItem
            icon={Settings}
            label="Profile & Settings"
            to="/profile"
            active={false}
          />
        </nav>
        <div className="p-4 border-t border-slate-200">
          <button
            onClick={logout}
            className="flex items-center text-red-600 hover:text-red-700 text-sm font-medium px-2"
          >
            <span className="mr-2">🚪</span> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10">
          <h1 className="text-xl font-bold text-slate-800">
            {user.role} Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-trust-500 w-64 hidden sm:block"
              />
            </div>
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Viewport */}
        <main className="flex-1 overflow-auto p-6">
          <Routes>
            <Route path="super-admin" element={<SuperAdminDashboard />} />
            <Route path="admin" element={<SuperAdminDashboard />} />
            <Route path="donor" element={<DonorDashboard />} />
            <Route path="legal-worker" element={<LegalWorkerDashboard />} />
            <Route
              path="*"
              element={
                <div className="text-center p-10 text-slate-500">
                  Dashboard module for {user.role} loaded.
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </PageTransition>
  );
};

export default DashboardPage;
