'use client'
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Send } from 'lucide-react';
import Link from 'next/link';

const questions = [
  {
    id: 1,
    text: "How much do you enjoy high-intensity activities?",
    type: "scale",
    min: "Not at all",
    max: "Love them"
  },
  {
    id: 2,
    text: "Which environment do you prefer for physical activities?",
    type: "choice",
    options: ["Indoor", "Outdoor", "Both equally"]
  },
  {
    id: 3,
    text: "How important is teamwork to you in sports?",
    type: "scale",
    min: "Not important",
    max: "Very important"
  },
  {
    id: 4,
    text: "What's your preferred duration for a workout session?",
    type: "choice",
    options: ["15-30 minutes", "30-60 minutes", "60-90 minutes", "Over 90 minutes"]
  },
  {
    id: 5,
    text: "How much do you enjoy activities that require precise movements?",
    type: "scale",
    min: "Not at all",
    max: "Very much"
  },
  
  {
    id: 6,
    text: "What Is Your region",
    type: "choice",
    options: ["Middle East","North Amarica","South Amarica","North Africa", "South Africa","Australia","Europe","Asia","Overseas"]
  }, 
  
  {
    id: 7,
    text: "What Is Your Age",
    type: "choice",
    options: ["13-17","18-25","26-35","36-45","46-55","56+"]
  }, 

  {
    id: 8,
    text: "What Is Your Hieght",
    type: "choice",
    options: ["150-160","161-170","171-180","181-190","191+"]
  }, 

  
  {
    id: 9,
    text: "What Is Your Wheight",
    type: "choice",
    options: ["50-60","61-70","71-80","81-90","91-100" ,"101+"]
  },  
  {
    id: 10,
    text: "What Is Your Ideal Wheight",
    type: "choice",
    options: ["50-60","61-70","71-80","81-90"]
  },  
  {
    id: 11,
    text: "Have you experienced any shoulder, back ro knee injury",
    type: "choice",
    options: ["Yes","No"]
  },
  {
    id: 12,
    text: "Do you suffer a disability",
    type: "choice",
    options: ["Yes","No"]
  },


];

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    // Here you would typically send the answers to your API
    console.log("Submitting answers:", answers);
    
    // Example API call (replace with your actual API endpoint)
    // try {
    //   const response = await fetch('https://api.sportsera.com/quiz', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(answers)
    //   });
    //   const result = await response.json();
    //   console.log(result);
    // } catch (error) {
    //   console.error('Error submitting quiz:', error);
    // }
  };

  const renderQuestion = () => {
    const question = questions[currentQuestion];
    if (question.type === "scale") {
      return (
        <div className="mt-6">
          <input
            type="range"
            min="1"
            max="10"
            value={answers[question.id] || 5}
            onChange={(e) => handleAnswer(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm mt-2">
            <span>{question.min}</span>
            <span>{question.max}</span>
          </div>
        </div>
      );
    } else if (question.type === "choice") {
      return (
        <div className="mt-6 space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={`w-full p-3 text-left rounded-lg transition-colors ${
                answers[question.id] === option
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      );
    }
  };

  return (
    <div style={{ minHeight: 'calc(100vh - (88px + 72px))' }} className="bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Discover Your Ideal Sport</h1>
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round((currentQuestion + 1) / questions.length * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-500 h-2.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-4">{questions[currentQuestion].text}</h2>
        {renderQuestion()}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`flex items-center px-4 py-2 rounded-lg ${
              currentQuestion === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            <ChevronLeft size={20} className="mr-2" /> Previous
          </button>
          {currentQuestion < questions.length - 1 ? (
            <button
              onClick={handleNext}
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Next <ChevronRight size={20} className="ml-2" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              <Link href="/quizResults">
              Submit <Send size={20} className="ml-2" />
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;