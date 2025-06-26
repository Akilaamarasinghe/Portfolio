import React from 'react';
import { CheckSquare, PenTool, Monitor, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Testing",
      icon: <CheckSquare size={40} className="text-amber-400 mb-4" />,
      description: "Ensure the quality and reliability of your software with comprehensive manual and automated testing services. We cover functional, performance, security, and usability testing to deliver error-free solutions.",
      items: [
        "Manual Testing",
        "Automation Testing",
      ],
    },
    {
      title: "UI/UX Design",
      icon: <PenTool size={40} className="text-amber-400 mb-4" />,
      description: "Create intuitive and engaging user interfaces and experiences tailored to your audience. Our UI/UX design services focus on usability, accessibility, and modern design trends.",
      items: [
        "Wireframing & Prototyping",
        "Responsive Design",
      ],
    },
    {
      title: "Web Development",
      icon: <Monitor size={40} className="text-amber-400 mb-4" />,
      description: "Build scalable and robust web applications using the latest technologies. From frontend to backend development, we ensure fast, secure, and visually appealing websites.",
      items: [
        "Frontend Development",
        "Backend Development",
        "FullStack Development",
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={40} className="text-amber-400 mb-4" />,
      description: "Develop high-performance mobile applications for both Android and iOS platforms. Our services include native and cross-platform development for diverse needs.",
      items: [
        "Mobile UI/UX Design",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100 dark:bg-black relative overflow-hidden transition-colors duration-500">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 dark:bg-amber-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/5 dark:bg-red-600/3 rounded-full filter blur-3xl"></div>
        <div className="absolute inset-0 opacity-5 bg-cinematic-grid"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-amber-200 dark:via-yellow-300 dark:to-amber-400 bg-clip-text text-transparent tracking-wider">
          OUR SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-gray-200/50 dark:border-amber-500/20 rounded-2xl p-6 shadow-2xl hover:border-blue-500/40 dark:hover:border-amber-500/40 transition-all duration-500 group">
              <div className="flex flex-col items-center text-center">
                <div className="text-blue-600 dark:text-amber-400 mb-6 group-hover:animate-pulse transition-colors duration-500">
                  {React.cloneElement(service.icon, { className: "w-12 h-12" })}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-amber-300 tracking-wide transition-colors duration-500">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed transition-colors duration-500">{service.description}</p>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 transition-colors duration-500">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-amber-400 rounded-full mr-3 flex-shrink-0 transition-colors duration-500"></div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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

export default Services;
