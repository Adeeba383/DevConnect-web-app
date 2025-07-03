import { useNavigate } from "react-router-dom";

function SelectionPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 px-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Developer Card */}
        <div
          onClick={() => navigate("/login-signup-page?role=developer")}
          className="cursor-pointer p-8 h-60 rounded-xl shadow-lg border border-amber-500 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 bg-amber-50 dark:bg-gray-800"
        >
          <h2 className="text-2xl mt-10 font-bold text-center mb-4 text-amber-600 font-raleway">
            I'm a Developer
          </h2>
          <p className="text-center text-gray-700 dark:text-gray-300">
            Showcase your skills, connect with users, and get hired.
          </p>
        </div>

        {/* User Card */}
        <div
          onClick={() => navigate("/login-signup-page?role=user")}
          className="cursor-pointer p-8 h-60 rounded-xl shadow-lg border border-amber-500 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 bg-amber-50 dark:bg-gray-800"
        >
          <h2 className="text-2xl mt-10 font-bold text-center mb-4 text-amber-600 font-raleway">
            I'm a User
          </h2>
          <p className="text-center text-gray-700 dark:text-gray-300">
            Find talented developers to bring your ideas to life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SelectionPage;
