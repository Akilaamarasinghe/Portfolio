import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  // Handle close menu on outside click
  useEffect(() => {
    if (isMenuOpen) {
      const closeMenu = () => setIsMenuOpen(false);
      window.addEventListener('click', closeMenu);
      return () => window.removeEventListener('click', closeMenu);
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full bg-white/90 dark:bg-black/90 backdrop-blur-sm text-gray-900 dark:text-white z-50 shadow-lg dark:shadow-2xl border-b border-gray-200/20 dark:border-amber-500/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-black text-blue-600 dark:text-amber-400 tracking-wider transition-colors duration-300">
            <a href="#home" className="hover:text-blue-700 dark:hover:text-amber-300 transition-colors duration-300">PORTFOLIO</a>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Education', 'Projects', 'Skills', 'Services', 'Contact'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 font-bold hover:text-blue-600 dark:hover:text-amber-400 transition-all duration-300 relative group"
              >
                {section}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-amber-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-amber-400 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-amber-500/30 transition-all duration-300 transform hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Social Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://github.com/Akilaamarasinghe" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-amber-400 transition-all duration-300 transform hover:scale-110">
                <Github size={20} />
              </a>
              <a href="http://www.linkedin.com/in/akila-sudeepa-a01888282" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-amber-400 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="mailto:akilasamarasinghe@icloud.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-amber-400 transition-all duration-300 transform hover:scale-110">
                <Mail size={20} />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-amber-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 right-0 w-3/4 h-full bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-2xl z-40 transform transition-transform duration-300 border-l border-gray-200 dark:border-amber-500/20">
          <div className="flex justify-end p-4">
            <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-amber-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav className="px-6 space-y-4">
            {['Home', 'About', 'Education', 'Projects', 'Skills', 'Services', 'Contact'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="block text-gray-700 dark:text-gray-300 font-bold hover:text-blue-600 dark:hover:text-amber-400 text-lg transition-colors duration-300 py-2 border-b border-gray-200/50 dark:border-gray-800/50"
                onClick={() => setIsMenuOpen(false)}
              >
                {section}
              </a>
            ))}
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://github.com/Akilaamarasinghe" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-amber-400 transition-all duration-300 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="http://www.linkedin.com/in/akila-sudeepa-a01888282" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-amber-400 transition-all duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:akilasamarasinghe@icloud.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-amber-400 transition-all duration-300 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
