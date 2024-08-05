'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Target, Users, ChevronRight } from 'lucide-react';
import Link from 'next/link';
const HomePage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Activity, title: "Personalized Sports Matching", description: "Discover the perfect sport tailored to your unique abilities and interests." },
    { icon: Zap, title: "Adaptive Training Plans", description: "Custom workouts that evolve with your progress, including options for all abilities." },
    { icon: Target, title: "Goal Tracking & Visualization", description: "Set, track, and visualize your athletic journey with interactive dashboards." },
    { icon: Users, title: "Community Challenges", description: "Compete in virtual events and connect with athletes worldwide." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-700 text-white">
      <header className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-center mb-6"
        >
          Redefine Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Athletic Potential</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-12"
        >
          Unleash your inner athlete with personalized sports matching, adaptive training, and a global community.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center"
        ><Link href="/auth">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
            Start Your Journey
          </button>
          </Link>
        </motion.div>
      </header>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-gray-800">
        <h2 className="text-4xl font-bold text-center mb-16">Revolutionizing Athletic Development</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className={`flex items-center p-4 rounded-lg transition-all duration-300 ${activeFeature === index ? 'bg-blue-100 shadow-lg' : ''}`}
              >
                <feature.icon className="w-10 h-10 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="relative h-96 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-2xl shadow-2xl overflow-hidden">
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Video
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Your Path to Athletic Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Discover', 'Train', 'Achieve'].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}

                className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-filter backdrop-blur-lg"
              >
                <div className="text-5xl font-bold mb-4">{index + 1}</div>
                <h3 className="text-2xl font-semibold mb-2">{step}</h3>
                <p className="text-blue-200">Take the first step towards your athletic goals today.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Alex Chen", sport: "Rock Climbing", quote: "Found my passion for climbing and improved my technique beyond my wildest dreams." },
              { name: "Samantha Lee", sport: "Adaptive Swimming", quote: "The personalized training plan helped me qualify for the Paralympics!" },
              { name: "Marcus Johnson", sport: "Trail Running", quote: "Discovered trail running and now I'm competing in ultra-marathons. Incredible journey!" }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <p className="text-lg mb-4">&quot;{story.quote}&quot;</p>
                <div className="font-semibold">{story.name}</div>
                <div className="text-blue-600">{story.sport}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

