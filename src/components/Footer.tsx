import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-extrabold tracking-wide text-blue-400">Akila Amarasinghe</h3>
            <p className="text-gray-300 dark:text-gray-600 text-sm mt-1">IT Student at SLIIT</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Akilaamarasinghe" 
              className="text-gray-300 dark:text-gray-600 hover:text-blue-400 dark:hover:text-blue-600 transition-transform transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a 
              href="http://www.linkedin.com/in/akila-sudeepa-a01888282" 
              className="text-gray-300 dark:text-gray-600 hover:text-blue-400 dark:hover:text-blue-600 transition-transform transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:akilasamarasinghe@icloud.com" 
              className="text-gray-300 dark:text-gray-600 hover:text-blue-400 dark:hover:text-blue-600 transition-transform transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 dark:border-gray-400 text-center">
          <p className="text-sm text-gray-400 dark:text-gray-700">
            &copy; {new Date().getFullYear()} <span className="text-blue-400 dark:text-blue-600 font-medium">Akila Amarasinghe</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
