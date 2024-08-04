import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ArrowRight, Dumbbell, Utensils, Trophy } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Sports Era - Personalized Nutrition and Motivation</title>
        <meta name="description" content="Discover your ideal sport, get personalized meal plans, and stay motivated with Sports Era." />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4">Welcome to Sports Era</h1>
          <p className="text-xl text-gray-600">Discover Your Sport. Fuel Your Body. Achieve Your Goals.</p>
        </header>

        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-semibold mb-6 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Dumbbell className="w-12 h-12 text-blue-500" />}
                title="Find Your Sport"
                description="Take our quiz or choose your preferred sport to get started on your fitness journey."
              />
              <FeatureCard
                icon={<Utensils className="w-12 h-12 text-green-500" />}
                title="Personalized Nutrition"
                description="Receive tailored meal plans that support your athletic goals and dietary needs."
              />
              <FeatureCard
                icon={<Trophy className="w-12 h-12 text-yellow-500" />}
                title="Stay Motivated"
                description="Get daily motivation, track your progress, and connect with a community of athletes."
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Athletic Journey?</h2>
            <p className="text-xl mb-8">Join Sports Era today and unlock your full potential!</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300 inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Sports Era helped me find the perfect sport and nutrition plan. I've never felt better!"
              author="Sarah J."
            />
            <TestimonialCard
              quote="The personalized meal plans and motivation tips have been a game-changer for my performance."
              author="Mike T."
            />
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Sports Era. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <p className="font-semibold">- {author}</p>
  </div>
);

export default LandingPage;