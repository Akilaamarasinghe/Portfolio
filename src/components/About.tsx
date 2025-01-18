import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Who Am I ?</h2>
        
        <div className="grid grid-cols-1 gap-12 items-start">
          {/* About Content Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-black">Hello, I'm Akila Sudeepa Amarasinghe</h3>
            <p className="text-lg mb-4">
              As a third-year Sri Lanka Institute of Information Technology undergraduate with a strong sense of passion and dedication, my goal is to develop into a flexible IT specialist. I have accumulated experience in front-end development, Full Stack development and MERN stack application development with a strong thirst for knowledge. Data Structures, algorithms, Python, Java, HTML and CSS have all been major areas of focus for me academically.
            </p>
            <p className="text-lg mb-4">
              I’m excited to put my knowledge and talents to use in a dynamic, team-oriented workplace. I’m well-known for my superior problem-solving skills, acute attention to detail, and flexibility in learning new technologies. To contribute to creative ideas and obtain real-world, practical experience, I’m looking for an internship, As QA Engineer , UI/UX Engineer , Frontend Developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
