import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
  setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <nav className="bg-black backdrop-blur-md border-b-2 border-amber-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.jpg" alt="DevConnect logo" className="h-10 sm:h-12 p-1 animate-spin" />
          <span className="text-xl sm:text-2xl font-bold text-amber-500 font-mono">
            DevConnect
          </span>
        </Link>

        <div className="hidden md:flex space-x-4 sm:space-x-6">
          <Link to="/" className="text-amber-500 hover:text-white text-sm sm:text-lg">Home</Link>
          <Link to="/selection-page" className="text-amber-500 hover:text-white text-sm sm:text-lg">Start Here</Link>
          <Link to="/login-signup-page" className="text-amber-500 hover:text-white text-sm sm:text-lg">Login</Link>
          <Link to="/dashboard" className="text-amber-500 hover:text-white text-sm sm:text-lg">Dashboard</Link>
          
        </div>
         
         <button onClick={toggleTheme} className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm ml-4">
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-amber-500 hover:text-white text-2xl focus:outline-none"
          >
            &#9776; 
          </button>
        </div>
      </div>

{isMenuOpen && (
  <div className="md:hidden px-4 pb-4 space-y-5 ">
  <Link to="/" className="block text-amber-500 hover:text-white text-base border-b-1 border-amber-500/50">Home</Link>
  <Link to="/selection-page" className="block text-amber-500 hover:text-white text-base border-b-1 border-amber-500/50">Start Here</Link>
  <Link to="/login-signup-page" className="block text-amber-500 hover:text-white text-base border-b-1 border-amber-500/50">Login</Link>
  <Link to="/dashboard" className="block text-amber-500 hover:text-white text-base border-b-1 border-amber-500/50">Dashboard</Link>
          
  </div>
      )}
</nav>
  );
}

export default Navbar;
