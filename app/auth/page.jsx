'use client'
import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div style={{ minHeight: 'calc(100vh - (88px + 72px))' }} className="bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        <div className="flex text-lg font-semibold">
          <button
            className={`flex-1 py-4 transition-colors duration-300 ${
              isSignUp ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </button>
          <button
            className={`flex-1 py-4 transition-colors duration-300 ${
              !isSignUp ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setIsSignUp(false)}
          >
            Sign In
          </button>
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            {isSignUp ? 'Create Your Account' : 'Welcome Back'}
          </h2>
          <form>
            {isSignUp && (
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-2 border-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none pl-12"
                    placeholder="John Doe"
                    required
                  />
                  <User className="absolute left-3 top-3 text-gray-400" size={20} />
                </div>
              </div>
            )}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-2 border-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none pl-12"
                  placeholder="you@example.com"
                  required
                />
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-2 border-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none pl-12"
                  placeholder="••••••••"
                  required
                />
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
              <ArrowRight className="ml-2" size={20} />
            </button>
          </form>
          {!isSignUp && (
            <p className="text-center mt-4 text-gray-600">
              <a href="#" className="text-blue-500 hover:underline">Forgot your password?</a>
            </p>
          )}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <button
                className="text-blue-500 hover:underline ml-1"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;