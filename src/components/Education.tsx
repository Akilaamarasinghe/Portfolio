import React from 'react';
import { GraduationCap, School, Book } from 'lucide-react'; // Importing icons

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Education</h2>

        <div className="space-y-12">
          {/* Bachelor's Degree Section */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-blue-600">Bachelor's Degree</h3>
            </div>
            <p className="text-lg mb-2">
              Pursuing a Bachelor of Science in Information Technology at the{' '}
              <strong>Sri Lanka Institute of Information Technology (SLIIT)</strong>.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Expected Graduation: 2026</li>
              <li>Specialized in Information Technology.</li>
              <li>GPA: 2.512/4.0 (as of current semester).</li>
            </ul>
          </div>

          {/* Secondary Education Section */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <School className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-blue-600">Secondary Education</h3>
            </div>
            <p className="text-lg mb-2">
              Completed secondary education at <strong>Matara Central College, Matara</strong>, Sri Lanka.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>2012-2021</li>
              <li>Stream: Science (Mathematics)</li>
              <li>Worked as Grade Monitor of Grade 9 in Matara Central College.</li>
            </ul>
          </div>

          {/* Primary Education Section */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <Book className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-blue-600">Primary Education</h3>
            </div>
            <p className="text-lg mb-2">
              Attended <strong>Matara Thalpawila Primary School</strong>, Matara, Sri Lanka.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>2007-2011.</li>
              <li>Participated in extracurricular activities including sports and cultural events.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
