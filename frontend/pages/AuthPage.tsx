import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../lib/types';
import { Button, Input, Card } from '../components/ui/Shared';
import { PageTransition } from '../components/ui/Motion';
import { motion } from 'framer-motion';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('demo@bst.org');
  const [password, setPassword] = useState('password');
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.DONOR);

  const { login, register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let authUser;
      if (isLogin) {
        authUser = await login(email, password);
      } else {
        authUser = await register(name, email, password, selectedRole);
      }

      switch (authUser.role) {
        case UserRole.SUPER_ADMIN: navigate('/dashboard/super-admin'); break;
        case UserRole.ADMIN: navigate('/dashboard/admin'); break;
        case UserRole.VOLUNTEER: navigate('/dashboard/volunteer'); break;
        case UserRole.DONOR: navigate('/dashboard/donor'); break;
        case UserRole.LEGAL_WORKER: navigate('/dashboard/legal-worker'); break;
        case UserRole.LEGAL_APPLICANT: navigate('/dashboard/legal-applicant'); break;
        case UserRole.STUDENT: navigate('/dashboard/student'); break;
        case UserRole.MENTOR: navigate('/dashboard/mentor'); break;
        default: navigate('/dashboard');
      }
    } catch (err: any) {
      console.error(err);
      const errorMessage = err.response?.data?.message || err.message || "Authentication failed. Please check credentials.";
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition className="min-h-[calc(100vh-80px)] bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="w-full max-w-md"
      >
        <Card className="w-full p-8 shadow-xl">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-12 h-12 bg-trust-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4"
            >
              BS
            </motion.div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              {isLogin ? 'Sign in to your account' : 'Join our community'}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Or <button onClick={() => setIsLogin(!isLogin)} className="font-medium text-trust-600 hover:text-trust-500 transition-colors">{isLogin ? 'create a new account' : 'sign in to existing account'}</button>
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {!isLogin && (
                <Input
                  label="Full Name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <Input
                label="Email address"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {!isLogin && (
                <Input label="Confirm Password" type="password" required />
              )}
            </div>

            {/* Role Selector for Registration */}
            {!isLogin && (
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-slate-50 p-4 rounded-md border border-slate-200"
              >
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Select Role</label>
                <select
                  className="w-full p-2 border border-slate-300 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-trust-500"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value as UserRole)}
                >
                  {Object.values(UserRole).map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </motion.div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-trust-600 focus:ring-trust-500 border-slate-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900">Remember me</label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-trust-600 hover:text-trust-500">Forgot password?</a>
              </div>
            </div>

            <Button type="submit" className="w-full" isLoading={loading}>
              {isLogin ? 'Sign in' : 'Register'}
            </Button>
          </form>
        </Card>
      </motion.div>
    </PageTransition>
  );
};

export default AuthPage;
