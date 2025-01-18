import React from 'react';
import { CheckSquare, PenTool, Monitor, Smartphone } from 'lucide-react'; // Importing icons

const Services = () => {
  const services = [
    {
      title: "Testing",
      icon: <CheckSquare size={40} className="text-blue-600 mb-4" />,
      description: "Ensure the quality and reliability of your software with comprehensive manual and automated testing services. We cover functional, performance, security, and usability testing to deliver error-free solutions.",
      items: [
        "Manual Testing",
        "Automation Testing",
       
      ],
    },
    {
      title: "UI/UX Design",
      icon: <PenTool size={40} className="text-blue-600 mb-4" />,
      description: "Create intuitive and engaging user interfaces and experiences tailored to your audience. Our UI/UX design services focus on usability, accessibility, and modern design trends.",
      items: [
        "Wireframing & Prototyping",
        "Responsive Design",
        
      ],
    },
    {
      title: "Web Development",
      icon: <Monitor size={40} className="text-blue-600 mb-4" />,
      description: "Build scalable and robust web applications using the latest technologies. From frontend to backend development, we ensure fast, secure, and visually appealing websites.",
      items: [
        "Frontend Development",
        "Backend Development",
        
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={40} className="text-blue-600 mb-4" />,
      description: "Develop high-performance mobile applications for both Android and iOS platforms. Our services include native and cross-platform development for diverse needs.",
      items: [
        "Mobile UI/UX Design",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center">
                {service.icon}
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
              </div>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
