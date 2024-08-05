'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Login from '../components/LoginComponent';
import Signup from '../components/SignupComponent';

const TabButton = ({ active, onClick, children }) => (
  <button
    className={`px-4 py-2 rounded-t-lg font-semibold transition-colors duration-300 ${
      active ? 'bg-white text-purple-600' : 'bg-purple-100 text-purple-400 hover:bg-purple-200'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    console.log('Sign in with Google');
  };
  return (
    <div style={{ minHeight: 'calc(100vh - (88px + 72px))' }} className="bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md">
        <div className="flex justify-center space-x-2 p-4 bg-purple-50">
          <TabButton active={activeTab === 'login'} onClick={() => setActiveTab('login')}>
            Login
          </TabButton>
          <TabButton active={activeTab === 'signup'} onClick={() => setActiveTab('signup')}>
            Sign Up
          </TabButton>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-6"
          >
            {activeTab === 'login' ? <Login /> : <Signup />}
          </motion.div>
        </AnimatePresence>
        
        <div className="px-6 pb-6">
          <div className="relative flex items-center justify-center text-sm my-4">
            <span className="bg-white px-2 text-gray-500">Or continue with</span>
            <div className="absolute w-full border-t border-gray-300" />
          </div>
           <div className="mt-6">
             <motion.button
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={handleGoogleSignIn}
               className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
             >
               Sign in with Google
             </motion.button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
