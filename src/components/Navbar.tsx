import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow px-6 py-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Ernie Crews III</h1>
          <button
            className="sm:hidden text-gray-900 dark:text-white text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col sm:flex sm:flex-row sm:space-x-6 mt-4 sm:mt-0`}>
          <Link to="/" className="text-blue-600 dark:text-blue-300 hover:underline mb-2 sm:mb-0">Home</Link>
          <Link to="/projects" className="text-blue-600 dark:text-blue-300 hover:underline mb-2 sm:mb-0">Projects</Link>
          <Link to="/skills" className="text-blue-600 dark:text-blue-300 hover:underline mb-2 sm:mb-0">Skills</Link>
          <Link to="/resume" className="text-blue-600 dark:text-blue-300 hover:underline mb-2 sm:mb-0">Resume</Link>
          <Link to="/contact" className="text-blue-600 dark:text-blue-300 hover:underline mb-2 sm:mb-0">Contact</Link>
          <button
            onClick={toggleDarkMode}
            className="mt-2 sm:mt-0 px-3 py-1 border rounded text-sm text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
