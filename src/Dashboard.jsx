
import { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="flex min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">

      <aside className="w-64 bg-amber-100 dark:bg-gray-900 shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-amber-600">Dashboard</h2>
        <nav className="space-y-4">
          <button onClick={() => setActiveTab("profile")} className="block w-full text-left text-lg hover:text-amber-600">
            Profile
          </button>
          <button onClick={() => setActiveTab("projects")} className="block w-full text-left text-lg hover:text-amber-600">
            Projects
          </button>
          <Link to="/" className="block text-lg hover:text-amber-600">
            Logout
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        {activeTab === "profile" && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Developer Profile</h3>
            <p>Name: Adeeba Malik</p>
            <p>Email: adeebamalik366@gmail.com</p>
            <p>Tech Stack: HTML5, CSS3, TailwindCSS4, Javascript, React js</p>
            <p>GitHub: https://github.com/Adeeba383</p>
          </div>
        )}

        {activeTab === "projects" && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Active Projects</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Portfolio Website for Startup</li>
              <li>Freelance Dashboard Design</li>
              <li>React E-commerce Template</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6 mb-4">Recent Bids</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>AI Resume Builder Web App</li>
              <li>Food Delivery App</li>
              <li>Mobile App UI Redesign</li>
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
