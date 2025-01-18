import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Online Bus Ticket Booking and Delivery Management System",
      description: "Developed a web-based Highway bus ticket booking system.",
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      tags: ["MERN Stack", "Bootstrap CSS", "Vite", "JWT", "JavaScript"],
      githubLink: "https://github.com/Akilaamarasinghe/Online-Bus-Ticket-Booking-and-Delivery-System.git",
    },
    
    {
      title: "Online Music Store",
      description: "Developed a web-based music listening and purchasing system.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      tags: ["Java", "HTML", "Bootstrap CSS","OOP"],
      githubLink: "https://github.com/Akilaamarasinghe/Movie-Ticket-Booking-System.git",
    },
    {
      title: "Online Movie Booking System",
      description: "Web-based online movie ticket booking system.",
      image: "https://images.unsplash.com/photo-1581905764498-9c7a0c931a4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      githubLink: "https://github.com/Akilaamarasinghe/Movie-Ticket-Booking-System.git",
    },
    
    {
      title: "To-Do List Application",
      description: "Simple Android mobile application, made a notes app using kotlin language.",
      image: "https://images.unsplash.com/photo-1600267185295-3b4b1601c68e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      tags: ["Kotlin", "RoomDB", "XML", "Android Studio"],
      githubLink: "https://github.com/Akilaamarasinghe/MADLab4",
    },
    
    
  ];
  
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.githubLink}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} className="mr-2" />
                    GitHub
                  </a>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;