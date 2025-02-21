import { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

const mockDietPlan = {
  imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
  meals: [
    { id: 1, name: 'Breakfast', time: '08:00' },
    { id: 2, name: 'Lunch', time: '13:00' },
    { id: 3, name: 'Dinner', time: '19:00' }
  ]
};

export default function UserDashboard() {
  const [mealEntries, setMealEntries] = useState([]);
  const [currentMeal, setCurrentMeal] = useState('');
  const [foodItems, setFoodItems] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentMeal || !foodItems) {
      toast.error('Please fill in all fields');
      return;
    }

    const newEntry = {
      id: Date.now(),
      meal: currentMeal,
      foods: foodItems,
      timestamp: new Date()
    };

    setMealEntries([newEntry, ...mealEntries]);
    setCurrentMeal('');
    setFoodItems('');
    toast.success('Meal entry added successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">My Diet Plan</h2>
          <img
            src={mockDietPlan.imageUrl}
            alt="Diet Plan"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <div className="space-y-4">
            {mockDietPlan.meals.map(meal => (
              <div key={meal.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">{meal.name}</span>
                <span className="text-gray-500">{meal.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Log Your Meal</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meal Type
                </label>
                <select
                  value={currentMeal}
                  onChange={(e) => setCurrentMeal(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select meal type</option>
                  {mockDietPlan.meals.map(meal => (
                    <option key={meal.id} value={meal.name}>{meal.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Food Items
                </label>
                <textarea
                  value={foodItems}
                  onChange={(e) => setFoodItems(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  rows="3"
                  placeholder="Enter the food items you ate..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300"
              >
                Log Meal
              </button>
            </form>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Entries</h2>
            <div className="space-y-4">
              {mealEntries.map(entry => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">{entry.meal}</span>
                    <span className="text-sm text-gray-500">
                      {format(entry.timestamp, 'MMM d, yyyy HH:mm')}
                    </span>
                  </div>
                  <p className="text-gray-600">{entry.foods}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
