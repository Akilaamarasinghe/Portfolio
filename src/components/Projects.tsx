import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
     {
      title: "Online Travel Agency Management System",
      description: "Developed a web-based Travel Agency Management system.",
      image: "https://media.istockphoto.com/id/1393093359/photo/search-for-air-travel-information-air-ticket-booking-for-travel.jpg?s=612x612&w=0&k=20&c=vjx4BAdbvsa-6DNt8uO3VkAKsZ2eTyhJA6rBAe4zFig=",
      tags: ["MERN Stack", "Tailwind CSS", "Vite", "JWT", "JavaScript"],
      githubLink: "https://github.com/Akilaamarasinghe/Travel-Agency.git",
    },

     {
      title: "Online Skill Sharing Platform",
      description: "Developed a web-based Skill Sharing Application.",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*IvJJ2qe97iFcG8_d-iMiNQ.png",
      tags: ["Spring Boot(REST API)","React", "Tailwind CSS", "Vite", "JWT", "JavaScript"],
      githubLink: "https://github.com/Akilaamarasinghe/Skill-Sharing.git",
    },

    {
      title: "Online Bus Ticket Booking and Delivery Management System",
      description: "Developed a web-based Highway bus ticket booking system.",
      image: "https://www.codewareltd.com/productlink/bus-ticket-booking-system/assets/images/Inter-city-Bus-Ticketing-&-management-system.jpg",
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
      image: "https://i.ytimg.com/vi/xUCotg8qh8U/maxresdefault.jpg",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      githubLink: "https://github.com/Akilaamarasinghe/Movie-Ticket-Booking-System.git",
    },
    
    {
      title: "To-Do List Application",
      description: "Simple Android mobile application, made a notes app using kotlin language.",
      image: "https://raw.githubusercontent.com/codedex-io/projects/main/projects/create-a-to-do-list-app-with-html-css-js/finished-todo-list.png",
      tags: ["Kotlin", "RoomDB", "XML", "Android Studio"],
      githubLink: "https://github.com/Akilaamarasinghe/MADLab4",
    },
    
    
  ];
  
  return (
    <section id="projects" className="py-20 bg-white dark:bg-black relative overflow-hidden transition-colors duration-500">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-red-600/3 rounded-full filter blur-3xl"></div>
        <div className="absolute inset-0 opacity-5 bg-cinematic-grid"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent tracking-wider">
          FEATURED PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-black/60 backdrop-blur-sm border border-gray-200 dark:border-amber-500/20 rounded-2xl overflow-hidden hover:border-blue-500/40 dark:hover:border-amber-500/40 hover:shadow-2xl transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-amber-300 group-hover:text-blue-600 dark:group-hover:text-amber-200 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors duration-500">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/10 dark:bg-amber-500/10 border border-blue-500/30 dark:border-amber-500/30 text-blue-700 dark:text-amber-300 rounded-full text-sm font-medium transition-colors duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.githubLink}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-amber-400 transition-all duration-300 font-bold group/link"
                  >
                    <Github size={20} className="mr-2 group-hover/link:animate-pulse" />
                    GitHub
                  </a>
                </div>
              </div>
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

export default Projects;