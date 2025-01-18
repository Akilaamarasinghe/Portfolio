import React, { useState } from 'react';
import { ArrowRight, Code, Layers, Clipboard, Download } from 'lucide-react'; // Importing icons
import cv from './Akila_CV.pdf';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [navigateTo, setNavigateTo] = useState('');

  // Function to handle modal confirmation
  const handleNavigation = (target: React.SetStateAction<string>) => {
    setNavigateTo(target);
    setShowModal(true);
  };

  // Function to handle modal close and navigation
  const handleConfirm = () => {
    setShowModal(false);
    if (navigateTo === 'projects') {
      window.location.href = '#projects'; // Navigate to Projects section
    } else if (navigateTo === 'contact') {
      window.location.href = '#contact'; // Navigate to Contact section
    }
  };

  // Function to handle modal cancel
  const handleCancel = () => {
    setShowModal(false); // Close the modal without navigating
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-black">Akila Sudeepa Amarasinghe</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">IT Student at SLIIT</p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            I am a third-year SLIIT undergraduate passionate about IT, eager to learn and grow. I aim to excel as a UI/UX Engineer, QA Engineer, or Frontend Developer, contributing creativity and technical skills to the industry.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => handleNavigation('projects')}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Me
            </button>
            {/* Download CV Button */}
            <a
              href={cv}
              download="Akila_Sudeepa_Amarasinghe_CV.pdf"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-800 text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Download size={20} className="mr-2" />
              Download CV
            </a>
          </div>

          {/* New Buttons for Job Titles */}
          <div className="flex justify-center gap-6 mb-8">
            <button className="inline-flex items-center px-6 py-3 border-2 border-gray-800 text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <Code size={20} className="mr-2" />
              Frontend Developer
            </button>
            <button className="inline-flex items-center px-6 py-3 border-2 border-gray-800 text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <Layers size={20} className="mr-2" />
              UI/UX Engineer
            </button>
            <button className="inline-flex items-center px-6 py-3 border-2 border-gray-800 text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <Clipboard size={20} className="mr-2" />
              QA Engineer
            </button>
          </div>

          {/* Modal for navigation confirmation */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Are you sure?</h2>
                <p className="mb-4">Do you want to go to the {navigateTo === 'projects' ? 'Projects' : 'Contact'} section?</p>
                <div className="flex justify-between">
                  <button
                    onClick={handleConfirm}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    OK
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Image in Top-Right Corner */}
      <div className="absolute top-0 right-0 p-6">
        <img
          src="https://drive.google.com/uc?export=view&id=1qOzkosgC10ytekbZ4cMLvcW4mxT3SjCa"
          alt="Akila Image"
          className="w-48 h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
