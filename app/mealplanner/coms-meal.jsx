'use client';
import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Edit, RefreshCw, Clock, BarChart2 } from 'lucide-react';

const MealPlanner = ({ sport }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('Day');

  const totalCalories = 1576;
  const nutritionData = {
    carbs: { value: 155, target: '26 - 198g' },
    fat: { value: 69.6, target: '44 - 88g' },
    protein: { value: 97.7, target: '49 - 198g' },
    fiber: { value: 29, target: '25g' },
    sodium: { value: 3284, target: null },
    cholesterol: { value: 148, target: null },
  };

  const meals = [
    {
      type: 'Breakfast',
      calories: 453,
      items: [
        { name: 'Veggie Omelet', servings: 1, image: '/placeholder-omelet.jpg' },
        { name: 'Peanut Butter and Banana Shake', servings: 1, image: '/placeholder-shake.jpg' },
      ],
    },
    {
      type: 'Lunch',
      calories: 380,
      items: [
        { name: 'Mango Strawberry Arugula Salad', servings: 1, image: '/placeholder-salad.jpg' },
        { name: 'Quick Mint Yogurt', servings: 1, image: '/placeholder-yogurt.jpg' },
      ],
    },
    {
      type: 'Dinner',
      calories: 504,
      items: [
        { name: 'Fish Burger', servings: 1, image: '/placeholder-fishburger.jpg' },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <DateNavigation
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">Meals</h2>
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg">{totalCalories} Calories</span>
            <div className="flex space-x-2">
              <button className="p-2 bg-gray-200 rounded-full">
                <RefreshCw size={20} />
              </button>
              <button className="p-2 bg-gray-200 rounded-full">
                <Edit size={20} />
              </button>
            </div>
          </div>
          {meals.map((meal, index) => (
            <MealSection key={index} meal={meal} />
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Nutrition</h2>
          <div className="flex space-x-2 mb-4">
            <button className="p-2 bg-blue-500 text-white rounded">
              <Clock size={20} />
            </button>
            <button className="p-2 bg-gray-200 rounded">
              <BarChart2 size={20} />
            </button>
          </div>
          <NutritionChart nutritionData={nutritionData} />
          <NutritionTable nutritionData={nutritionData} />
        </div>
      </div>
    </div>
  );
};

const DateNavigation = ({ currentDate, setCurrentDate, viewMode, setViewMode }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Day</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Week</button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 bg-gray-200 rounded-full"><ChevronLeft size={20} /></button>
        <button className="p-2 bg-gray-200 rounded-full"><Calendar size={20} /></button>
        <span className="text-lg font-semibold">Today</span>
        <button className="p-2 bg-gray-200 rounded-full"><ChevronRight size={20} /></button>
      </div>
      <button className="px-4 py-2 bg-orange-500 text-white rounded flex items-center">
        <Edit size={20} className="mr-2" /> Edit Day
      </button>
    </div>
  );
};

const MealSection = ({ meal }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{meal.type}</h3>
        <span>{meal.calories} Calories</span>
      </div>
      {meal.items.map((item, index) => (
        <div key={index} className="flex items-center space-x-4 mb-2">
          <input type="checkbox" className="form-checkbox" />
          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-gray-600">{item.servings} serving</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const NutritionChart = ({ nutritionData }) => {
  // This is a placeholder for the pie chart
  // You would typically use a charting library like Chart.js or Recharts here
  return (
    <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4">
      {/* Placeholder for pie chart */}
    </div>
  );
};

const NutritionTable = ({ nutritionData }) => {
  return (
    <table className="w-full">
      <tbody>
        {Object.entries(nutritionData).map(([nutrient, { value, target }]) => (
          <tr key={nutrient} className="border-b">
            <td className="py-2 capitalize">{nutrient}</td>
            <td className="py-2 text-right">{value}{nutrient === 'sodium' ? 'mg' : 'g'}</td>
            <td className="py-2 text-right text-gray-600">{target || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MealPlanner;