import MealPlanner from './coms-meal.jsx';

export default function MealPlanPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Your Personalized Meal Plan</h1>
      <MealPlanner sport="running" /> {/* Replace with the actual sport */}
    </div>
  );
}