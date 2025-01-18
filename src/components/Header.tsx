import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Load initial theme from localStorage or default to light mode
    return localStorage.getItem('theme') === 'dark';
  });

  // Apply dark/light mode class to HTML root element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Handle close menu on outside click
  useEffect(() => {
    if (isMenuOpen) {
      const closeMenu = () => setIsMenuOpen(false);
      window.addEventListener('click', closeMenu);
      return () => window.removeEventListener('click', closeMenu);
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white z-50 shadow-md dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 dark:text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-400">
            <a href="#home">Portfolio</a>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Education', 'Projects', 'Skills', 'Services', 'Contact'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-gray-300 font-bold hover:text-blue-400 transition-colors dark:text-gray-800 dark:hover:text-blue-600"
              >
                {section}
              </a>
            ))}
          </nav>

          {/* Dark Mode Toggle */}
          <button
            className="ml-4 p-2 rounded-full bg-gray-800 text-gray-300 hover:text-yellow-400 dark:bg-gray-200 dark:text-gray-800 dark:hover:text-gray-600 transition-colors"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Social Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Akilaamarasinghe" className="hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="http://www.linkedin.com/in/akila-sudeepa-a01888282" className="hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:akilasamarasinghe@icloud.com" className="hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed top-0 right-0 w-3/4 h-full bg-gray-900 dark:bg-gray-100 shadow-lg z-40 transform transition-transform duration-300"
        >
          <div className="flex justify-end p-4">
            <button className="text-gray-300 dark:text-gray-800" onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav className="px-6 space-y-4">
            {['Home', 'About', 'Education', 'Projects', 'Skills', 'Services', 'Contact'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="block text-gray-300 font-bold hover:text-blue-400 text-lg transition-colors dark:text-gray-800 dark:hover:text-blue-600"
              >
                {section}
              </a>
            ))}
          </nav>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="https://github.com/Akilaamarasinghe" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="http://www.linkedin.com/in/akila-sudeepa-a01888282" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:akilasamarasinghe@icloud.com" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
