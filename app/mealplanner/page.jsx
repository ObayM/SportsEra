'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusCircle, Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';

const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
const daysOfWeek = [ 'Saturday', 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const MealPlannerPage = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [activeDay, setActiveDay] = useState(daysOfWeek[0]);
  const [meals, setMeals] = useState({});

  const addMeal = (day, mealType) => {
    const mealName = prompt(`Enter ${mealType} for ${day}:`);
    if (mealName) {
      setMeals(prevMeals => ({
        ...prevMeals,
        [day]: {
          ...prevMeals[day],
          [mealType]: [...(prevMeals[day]?.[mealType] || []), mealName]
        }
      }));
    }
  };

  const removeMeal = (day, mealType, index) => {
    setMeals(prevMeals => ({
      ...prevMeals,
      [day]: {
        ...prevMeals[day],
        [mealType]: prevMeals[day][mealType].filter((_, i) => i !== index)
      }
    }));
  };

  const changeWeek = (increment) => {
    setCurrentWeek(prevWeek => {
      const newWeek = new Date(prevWeek);
      newWeek.setDate(newWeek.getDate() + (increment * 7));
      return newWeek;
    });
  };

  const formatWeekRange = (date) => {
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay() + 1);
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    return `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-blue-600 mb-4 sm:mb-0">Meal Planner</h1>
            <div className="flex items-center space-x-4">
              <button onClick={() => changeWeek(-1)} className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200">
                <ChevronLeft size={24} />
              </button>
              <span className="text-lg font-semibold flex items-center">
                <Calendar size={20} className="mr-2" />
                {formatWeekRange(currentWeek)}
              </span>
              <button onClick={() => changeWeek(1)} className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="mb-6 overflow-x-auto">
            <div className="flex space-x-2 sm:space-x-4">
              {daysOfWeek.map(day => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-3 py-2 rounded-t-lg font-semibold transition-colors duration-300 ${
                    activeDay === day ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                  }`}
                >
                  {day.slice(0, 3)}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {mealTypes.map(mealType => (
                <div key={mealType} className="mb-6">
                  <h2 className="text-xl font-semibold text-blue-600 mb-2">{mealType}</h2>
                  <div className="bg-blue-50 rounded-lg p-4 min-h-[100px] relative">
                    {meals[activeDay]?.[mealType]?.map((meal, index) => (
                      <div key={index} className="bg-white rounded p-2 mb-2 flex justify-between items-center">
                        <span>{meal}</span>
                        <button
                          onClick={() => removeMeal(activeDay, mealType, index)}
                          className="mr-4 text-red-500 hover:text-red-600"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => addMeal(activeDay, mealType)}
                      className="absolute bottom-1 right-2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors duration-300"
                    >
                      <PlusCircle size={24} />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MealPlannerPage;