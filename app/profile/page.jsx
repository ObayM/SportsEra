'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, TrendingUp, User, Calendar, Target, Trophy } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ProfilePage = () => {
  const [chosenSport, setChosenSport] = useState('');
  const [workoutTime, setWorkoutTime] = useState('');
  const [workoutHistory, setWorkoutHistory] = useState([]);
  const [totalWorkoutTime, setTotalWorkoutTime] = useState(0);
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [goal, setGoal] = useState(30); // Default goal: 30 minutes per day

  useEffect(() => {
    const storedSport = localStorage.getItem('chosenSport');
    if (storedSport) setChosenSport(storedSport);

    const storedHistory = localStorage.getItem('workoutHistory');
    if (storedHistory) {
      const history = JSON.parse(storedHistory);
      setWorkoutHistory(history);
      updateStats(history);
    }

    const storedGoal = localStorage.getItem('workoutGoal');
    if (storedGoal) setGoal(parseInt(storedGoal));
  }, []);

  const updateStats = (history) => {
    const total = history.reduce((sum, workout) => sum + workout.duration, 0);
    setTotalWorkoutTime(total);

    let currentStreak = 0;
    let maxStreak = 0;
    let lastDate = null;

    history.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(workout => {
      const workoutDate = new Date(workout.date);
      if (lastDate && (lastDate - workoutDate) / (1000 * 60 * 60 * 24) === 1) {
        currentStreak++;
      } else {
        currentStreak = 1;
      }
      maxStreak = Math.max(maxStreak, currentStreak);
      lastDate = workoutDate;
    });

    setStreak(currentStreak);
    setLongestStreak(maxStreak);
  };

  const handleAddWorkout = () => {
    if (workoutTime && !isNaN(workoutTime)) {
      const newWorkout = {
        id: Date.now(),
        duration: parseInt(workoutTime),
        date: new Date().toISOString().split('T')[0]
      };
      const updatedHistory = [...workoutHistory, newWorkout];
      setWorkoutHistory(updatedHistory);
      localStorage.setItem('workoutHistory', JSON.stringify(updatedHistory));
      updateStats(updatedHistory);
      setWorkoutTime('');
    }
  };

  const handleSetGoal = (newGoal) => {
    setGoal(newGoal);
    localStorage.setItem('workoutGoal', newGoal.toString());
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 p-4 sm:p-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="md:flex">
          <motion.div variants={itemVariants} className="md:flex-shrink-0 bg-blue-600 p-8 text-white">
            <User className="w-24 h-24 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-center">Obay Rashad</h2>
            <p className="text-blue-200 text-center">Healthy Man</p>
          </motion.div>
          <div className="p-8">
            <motion.div variants={itemVariants} className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">Your Chosen Sport</motion.div>
            <motion.h1 variants={itemVariants} className="text-3xl font-bold text-gray-900 mb-4">{chosenSport || 'Not set'}</motion.h1>
            <motion.p variants={itemVariants} className="mt-2 text-gray-600">
              Keep pushing your limits in {chosenSport}! Remember, every workout brings you closer to your goals.
            </motion.p>
          </div>
        </div>

        <motion.div variants={itemVariants} className="px-8 py-6 bg-gray-50 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Clock className="mr-2" /> Workout Tracker
          </h3>
          <div className="flex flex-wrap items-center space-x-4">
            <input
              type="number"
              value={workoutTime}
              onChange={(e) => setWorkoutTime(e.target.value)}
              placeholder="Workout time (minutes)"
              className="flex-grow px-4 py-2 mb-2 sm:mb-0 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddWorkout}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Add Workout
            </motion.button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="px-8 py-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Award className="mr-2" /> Your Progress
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="text-lg font-medium text-gray-700 mb-2 flex items-center">
                <TrendingUp className="mr-2" /> Total Workout Time
              </h4>
              <p className="text-3xl font-bold text-blue-600">{totalWorkoutTime} minutes</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="text-lg font-medium text-gray-700 mb-2 flex items-center">
                 Current Streak
              </h4>
              <p className="text-3xl font-bold text-green-600">{streak} days</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="text-lg font-medium text-gray-700 mb-2 flex items-center">
                <Trophy className="mr-2" /> Longest Streak
              </h4>
              <p className="text-3xl font-bold text-yellow-600">{longestStreak} days</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="text-lg font-medium text-gray-700 mb-2 flex items-center">
                <Target className="mr-2" /> Daily Goal
              </h4>
              <p className="text-3xl font-bold text-purple-600">{goal} minutes</p>
              <input
                type="range"
                min="10"
                max="120"
                step="5"
                value={goal}
                onChange={(e) => handleSetGoal(parseInt(e.target.value))}
                className="w-full mt-2"
              />
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="px-8 py-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Calendar className="mr-2" /> Workout History
          </h3>
          <div className="h-64 sm:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={workoutHistory.slice(-30)} // Show last 30 days
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="duration" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="px-8 py-6 bg-gray-50">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Tips</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Stay hydrated! Drink water before, during, and after your workouts.</li>
            <li>Don&lsquo;t forget to warm up and cool down to prevent injuries.</li>
            <li>Mix up your routine to keep things interesting and challenge different muscle groups.</li>
            <li>Get enough sleep to help your body recover and perform at its best.</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;