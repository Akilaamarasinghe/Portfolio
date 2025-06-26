import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", percentage: 85 },
        { name: "TypeScript", percentage: 70 },
        { name: "HTML5", percentage: 95 },
        { name: "CSS3", percentage: 90 },
        { name: "Tailwind CSS", percentage: 70 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", percentage: 80 },
        { name: "Express", percentage: 75 },
        { name: "PHP", percentage: 80 },
        { name: "MongoDB", percentage: 70 },
        { name: "SQL", percentage: 65 },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", percentage: 90 },
        { name: "VS Code", percentage: 95 },
        { name: "Laravel", percentage: 80 },
        { name: "Figma", percentage: 95 },
        { name: "CodeIgniter", percentage: 85 },
      ],
    },
    {
      category: "Other",
      items: [
        { name: "Problem Solving", percentage: 95 },
        { name: "Team Collaboration", percentage: 80 },
        { name: "Agile Methodology", percentage: 80 },
        { name: "UI/UX Design", percentage: 85 },
      ],
    },
  ];

  const getGradientColor = (percentage: number) => {
    if (percentage >= 90) return "from-amber-500 to-yellow-500";
    if (percentage >= 75) return "from-orange-500 to-red-500";
    if (percentage >= 50) return "from-red-500 to-pink-500";
    return "from-pink-500 to-purple-500";
  };

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900 relative overflow-hidden transition-colors duration-500">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 dark:bg-amber-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-600/5 dark:bg-red-600/3 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-amber-200 dark:via-yellow-300 dark:to-amber-400 bg-clip-text text-transparent tracking-wider">
          SKILLS & TECHNOLOGIES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-gray-300/50 dark:border-amber-500/20 rounded-2xl p-6 shadow-xl hover:border-blue-500/40 dark:hover:border-amber-500/40 transition-all duration-500 group">
              <h3 className="text-2xl font-bold mb-6 text-blue-700 dark:text-amber-300 tracking-wide">{skillGroup.category}</h3>
              <ul className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-600 dark:text-amber-400 text-sm font-bold font-mono">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200/80 dark:bg-gray-800/80 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${getGradientColor(skill.percentage)} transition-all duration-1500 delay-300 shadow-glow`}
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .shadow-glow { box-shadow: 0 0 20px currentColor; }
      `}</style>
    </section>
  );
};

export default Skills;
