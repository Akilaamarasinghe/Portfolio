import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-500">
      {/* Cinematic background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 dark:bg-amber-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/5 dark:bg-red-600/3 rounded-full filter blur-3xl"></div>
        <div className="absolute inset-0 opacity-5 bg-cinematic-grid"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-amber-200 dark:via-yellow-300 dark:to-amber-400 bg-clip-text text-transparent tracking-wider">
          WHO AM I?
        </h2>
        
        <div className="grid grid-cols-1 gap-12 items-start">
          <div className="bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-gray-200/50 dark:border-amber-500/20 rounded-2xl p-8 shadow-2xl transition-colors duration-500">
            <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-amber-300 tracking-wide transition-colors duration-500">
              Hello, I'm Akila Sudeepa Amarasinghe
            </h3>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300 transition-colors duration-500">
              <p className="relative">
                <span className="relative z-10">
                  As a third-year Sri Lanka Institute of Information Technology undergraduate with a strong sense of passion and dedication, 
                  my goal is to develop into a flexible IT specialist. I have accumulated experience in front-end development,
                   Full Stack development and MERN stack application development with a strong thirst for knowledge. 
                   Data Structures, algorithms, Python, Java, HTML and CSS have all been major areas of focus for me academically.
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/5 to-yellow-600/5 blur-xl rounded-lg"></div>
              </p>
              <p className="relative">
                <span className="relative z-10">
                  I'm excited to put my knowledge and talents to use in a dynamic, team-oriented workplace.
                   I'm well-known for my superior problem-solving skills, acute attention to detail, 
                   and flexibility in learning new technologies. To contribute to creative ideas and obtain real-world,
                    practical experience, I'm looking for an internship, As QA Engineer, UI/UX Engineer,
                    FullStack Developer, Frontend Developer.
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/5 to-yellow-600/5 blur-xl rounded-lg"></div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-cinematic-grid {
          background-image: 
            linear-gradient(rgba(245, 158, 11, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
        }
      `}</style>
    </section>
  );
};

export default About;
