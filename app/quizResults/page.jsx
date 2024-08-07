'use client'
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { Save } from 'lucide-react';

const QuizResults = () => {
  const [recommendations, setRecommendations] = useState('');
  const [chosenSport, setChosenSport] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const storedRecommendations = localStorage.getItem('sportRecommendations');
    if (storedRecommendations) {
      setRecommendations(JSON.parse(storedRecommendations).recommendations);
    }

    const storedSport = localStorage.getItem('chosenSport');
    if (storedSport) {
      setChosenSport(storedSport);
    }
  }, []);

  const handleSaveSport = () => {
    if (chosenSport.trim()) {
      localStorage.setItem('chosenSport', chosenSport.trim());
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 p-4 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-8"
      >
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Your Ideal Sports
        </h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <label htmlFor="chosen-sport" className="block text-sm font-medium text-gray-700 mb-2">
            Choose your favorite sport:
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              name="chosen-sport"
              id="chosen-sport"
              className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200 ease-in-out"
              placeholder="Enter your chosen sport"
              value={chosenSport}
              onChange={(e) => setChosenSport(e.target.value)}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleSaveSport}
              className="inline-flex items-center px-4 py-2 border border-l-0 border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <Save className="h-5 w-5 mr-2" aria-hidden="true" />
              Save
            </motion.button>
          </div>
          {isSaved && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 text-sm text-green-600"
            >
              Your chosen sport has been saved!
            </motion.p>
          )}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="prose max-w-none"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Recommended Sports for You:</h2>
          {recommendations ? (
            <ReactMarkdown 
              components={{
                h1: ({node, ...props}) => <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700" {...props} />,
                h2: ({node, ...props}) => <h4 className="text-lg font-medium mt-3 mb-2 text-gray-600" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-5 mt-2 mb-4" {...props} />,
                li: ({node, ...props}) => <li className="text-gray-600 mb-1" {...props} />,
              }}
            >
              {recommendations}
            </ReactMarkdown>
          ) : (
            <p className="text-center text-gray-500">Loading recommendations...</p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QuizResults;