import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Heart, ArrowUp, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-black border-t border-gray-700/50 dark:border-amber-500/20 text-gray-200 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/8 dark:bg-amber-600/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/5 dark:bg-red-600/3 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/3 dark:bg-yellow-600/2 rounded-full filter blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand & Description Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-4xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 dark:from-amber-200 dark:via-yellow-300 dark:to-amber-400 bg-clip-text text-transparent mb-3">
                  AKILA
                </h3>
                <p className="text-gray-400 dark:text-gray-400 text-lg font-medium tracking-wide">
                  IT Student & Creative Developer
                </p>
              </div>
              
              <p className="text-gray-400 dark:text-gray-300 leading-relaxed max-w-sm">
                Passionate about creating exceptional digital experiences through innovative design and cutting-edge technology.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-gray-800/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 dark:border-amber-500/10">
                  <div className="text-2xl font-bold text-cyan-400 dark:text-amber-400">3+</div>
                  <div className="text-sm text-gray-400">Years Learning</div>
                </div>
                <div className="bg-gray-800/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 dark:border-amber-500/10">
                  <div className="text-2xl font-bold text-cyan-400 dark:text-amber-400">10+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white dark:text-amber-300 tracking-wide">Quick Links</h4>
              <nav className="space-y-3">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-cyan-400 dark:hover:text-amber-400 transition-all duration-300 group flex items-center"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                    <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact & Social Section */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white dark:text-amber-300 tracking-wide">Get In Touch</h4>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail size={18} className="text-cyan-400 dark:text-amber-400" />
                  <a href="mailto:akilasamarasinghe@icloud.com" className="hover:text-cyan-400 dark:hover:text-amber-400 transition-colors duration-300">
                    akilasamarasinghe@icloud.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone size={18} className="text-cyan-400 dark:text-amber-400" />
                  <a href="tel:+94714993320" className="hover:text-cyan-400 dark:hover:text-amber-400 transition-colors duration-300">
                    +94 714993320
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin size={18} className="text-cyan-400 dark:text-amber-400" />
                  <span>Matara, Sri Lanka</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-gray-300 dark:text-amber-200">Follow Me</h5>
                <div className="flex space-x-4">
                  {[
                    { 
                      icon: Github, 
                      href: "https://github.com/Akilaamarasinghe", 
                      label: "GitHub",
                      color: "hover:text-gray-300"
                    },
                    { 
                      icon: Linkedin, 
                      href: "http://www.linkedin.com/in/akila-sudeepa-a01888282", 
                      label: "LinkedIn",
                      color: "hover:text-blue-400"
                    },
                    { 
                      icon: Mail, 
                      href: "mailto:akilasamarasinghe@icloud.com", 
                      label: "Email",
                      color: "hover:text-red-400"
                    }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`group relative p-3 bg-gray-800/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700/50 dark:border-amber-500/10 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-amber-900 text-white dark:text-amber-100 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {social.label}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700/50 dark:border-amber-500/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 dark:text-gray-400 text-sm">
                &copy; {currentYear}{' '}
                <span className="text-cyan-400 dark:text-amber-400 font-bold">AKILA SUDEEPA AMARASINGHE</span>
                . All rights reserved.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-xs mt-1 flex items-center justify-center md:justify-start">
                Made with <Heart size={12} className="mx-1 text-red-500 animate-pulse" /> and lots of coffee
              </p>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-amber-600 dark:to-amber-500 text-white dark:text-black font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-500 dark:hover:from-amber-500 dark:hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span className="text-sm">Back to Top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="absolute top-8 right-8 hidden lg:flex items-center space-x-2 bg-gray-800/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700/50 dark:border-amber-500/20">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-400 dark:text-gray-300">Available for Work</span>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
