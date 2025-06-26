import React from 'react';
import { GraduationCap, School, Book } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-100 dark:bg-gray-900 relative overflow-hidden transition-colors duration-500">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 dark:bg-amber-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-600/5 dark:bg-red-600/3 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-amber-200 dark:via-yellow-300 dark:to-amber-400 bg-clip-text text-transparent tracking-wider">
          EDUCATION
        </h2>

        <div className="space-y-8">
          {/* Bachelor's Degree */}
          <div className="bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-gray-200/50 dark:border-amber-500/20 rounded-2xl p-8 shadow-2xl hover:border-blue-500/40 dark:hover:border-amber-500/40 transition-all duration-500 group">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-10 h-10 text-blue-600 dark:text-amber-400 mr-4 group-hover:animate-pulse transition-colors duration-500" />
              <h3 className="text-3xl font-bold text-gray-800 dark:text-amber-300 transition-colors duration-500">Bachelor's Degree</h3>
            </div>
            <p className="text-xl mb-4 text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-500">
              Pursuing a Bachelor of Science in Information Technology at the{' '}
              <strong className="text-blue-600 dark:text-amber-400 transition-colors duration-500">Sri Lanka Institute of Information Technology (SLIIT)</strong>.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 text-lg transition-colors duration-500">
              <li>Expected Graduation: <span className="text-blue-600 dark:text-amber-300 font-semibold transition-colors duration-500">2026</span></li>
              <li>Specialized in <span className="text-blue-600 dark:text-amber-300 font-semibold transition-colors duration-500">Information Technology</span></li>
              <li>GPA: <span className="text-blue-600 dark:text-amber-300 font-semibold transition-colors duration-500">2.512/4.0</span> (as of current semester)</li>
            </ul>
          </div>

          {/* Secondary Education */}
          <div className="bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-gray-200/50 dark:border-amber-500/20 rounded-2xl p-8 shadow-2xl hover:border-blue-500/40 dark:hover:border-amber-500/40 transition-all duration-500 group">
            <div className="flex items-center mb-6">
              <School className="w-10 h-10 text-blue-600 dark:text-amber-400 mr-4 group-hover:animate-pulse transition-colors duration-500" />
              <h3 className="text-3xl font-bold text-gray-800 dark:text-amber-300 transition-colors duration-500">Secondary Education</h3>
            </div>
            <p className="text-xl mb-4 text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-500">
              Completed secondary education at <strong className="text-blue-600 dark:text-amber-400 transition-colors duration-500">Matara Central College, Matara</strong>, Sri Lanka.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 text-lg transition-colors duration-500">
              <li><span className="text-blue-600 dark:text-amber-300 font-semibold transition-colors duration-500">2012-2021</span></li>
              <li>Stream: <span className="text-blue-600 dark:text-amber-300 font-semibold transition-colors duration-500">Science (Mathematics)</span></li>
              <li>Worked as <span className="text-blue-600 dark:text-amber-300 font-semibold transition-colors duration-500">Grade Monitor of Grade 9</span> in Matara Central College</li>
            </ul>
          </div>

          {/* Primary Education */}
          <div className="bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-gray-200/50 dark:border-amber-500/20 rounded-2xl p-8 shadow-2xl hover:border-blue-500/40 dark:hover:border-amber-500/40 transition-all duration-500 group">
            <div className="flex items-center mb-6">
              <Book className="w-10 h-10 text-blue-600 dark:text-amber-400 mr-4 group-hover:animate-pulse transition-colors duration-500" />
              <h3 className="text-3xl font-bold text-gray-800 dark:text-amber-300 transition-colors duration-500">Primary Education</h3>
            </div>
            <p className="text-xl mb-4 text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-500">
              Attended <strong className="text-blue-600 dark:text-amber-400 transition-colors duration-500">Matara Thalpawila Primary School</strong>, Matara, Sri Lanka.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 text-lg transition-colors duration-500">
              <li><span className="text-blue-600 dark:text-amber-300 font-semibold transition-colors duration-500">2007-2011</span></li>
              <li>Participated in extracurricular activities including <span className="text-blue-600 dark:text-amber-300 font-semibold transition-colors duration-500">sports and cultural events</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
