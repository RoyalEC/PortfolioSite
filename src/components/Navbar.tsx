import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Ernie Crews</h1>
      <div className="space-x-4 text-lg">
        <Link to="/" className="text-blue-600 dark:text-blue-300 hover:underline">Home</Link>
        <Link to="/projects" className="text-blue-600 dark:text-blue-300 hover:underline">Projects</Link>
        <Link to="/skills" className="text-blue-600 dark:text-blue-300 hover:underline">Skills</Link>
        <Link to="/resume" className="text-blue-600 dark:text-blue-300 hover:underline">Resume</Link>
        <Link to="/contact" className="text-blue-600 dark:text-blue-300 hover:underline">Contact</Link>
        <button
          onClick={toggleDarkMode}
          className="ml-4 px-3 py-1 rounded border text-sm text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;