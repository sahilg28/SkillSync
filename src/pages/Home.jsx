import { Link } from "react-router-dom";
import { BriefcaseIcon, UserGroupIcon, ChartBarIcon } from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-lg shadow-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to SkillSync
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Your gateway to finding the perfect job match based on your skills and preferences.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="bg-white text-blue-800 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BriefcaseIcon className="h-12 w-12 text-blue-800 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Smart Job Matching</h3>
          <p className="text-gray-600">
            Our AI-powered system matches your skills with the perfect job opportunities.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <UserGroupIcon className="h-12 w-12 text-blue-800 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
          <p className="text-gray-600">
            Track your progress and get recommendations for skill improvement.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <ChartBarIcon className="h-12 w-12 text-blue-800 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Career Analytics</h3>
          <p className="text-gray-600">
            Get insights into your career path and market trends.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home; 