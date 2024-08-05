'use client'
import React, { useState } from 'react';
import { Send, Mail, Phone, User } from 'lucide-react';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formState);
  };

  return (
    <>
    <div style={{ minHeight: 'calc(100vh - (64px + 88px)' }} className="bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-700 text-white font-sans flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Contact Us
        </h1>
        <p className="text-center mb-8 text-lg">
          We&apos;d love to hear from you! Drop us a message and we&apos;ll get back to you soon.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                name="firstName"
                value={formState.firstName}
                onChange={handleInputChange}
                required
                className="w-full bg-white/5 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                placeholder="First Name"
              />
              <User className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>
            <div className="relative">
              <input
                type="text"
                name="lastName"
                value={formState.lastName}
                onChange={handleInputChange}
                required
                className="w-full bg-white/5 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                placeholder="Last Name"
              />
              <User className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              required
              className="w-full bg-white/5 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              placeholder="Email"
            />
            <Mail className="absolute right-3 top-3 text-gray-400" size={20} />
          </div>
          <div className="relative">
            <textarea
              name="message"
              value={formState.message}
              onChange={handleInputChange}
              required
              rows="4"
              className="w-full bg-white/5 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactPage;