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
        { name: "MongoDB", percentage: 70 },
        { name: "SQL", percentage: 65 },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", percentage: 90 },
        { name: "VS Code", percentage: 95 },
        { name: "Docker", percentage: 70 },
        { name: "Figma", percentage: 95 },
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

  const getPercentageColor = (percentage) => {
    if (percentage >= 90) return "text-green-500";
    if (percentage >= 75) return "text-blue-500";
    if (percentage >= 50) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">{skillGroup.category}</h3>
              <ul className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>{skill.name}</span>
                      <span className={`text-sm font-semibold ${getPercentageColor(skill.percentage)}`}>
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="h-2.5 rounded-full"
                        style={{
                          width: `${skill.percentage}%`,
                          background: `linear-gradient(to right, #3b82f6, #10b981)`,
                        }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
