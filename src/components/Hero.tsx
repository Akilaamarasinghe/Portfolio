import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Layers, Database, TestTube, Download, Zap, Star } from 'lucide-react';
import cv from './Akila_CV.pdf';
import bgimage from '../assets/Akila.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Frontend Developer', 'UI/UX Designer', 'Full Stack Engineer', 'QA Engineer'];
  
  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    
    const typeText = () => {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
          setDisplayText('');
        }, 2000);
      }
    };
    
    const timeout = setTimeout(typeText, 500);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Particle component
  const Particle = ({ delay }: { delay: number }) => (
    <div 
      className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float 6s ease-in-out infinite ${delay}s, glow 2s ease-in-out infinite alternate`
      }}
    />
  );

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black relative overflow-hidden transition-colors duration-500"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        {/* Film grain overlay */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-noise"></div>
        
        {/* Dramatic lighting */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 dark:bg-amber-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-purple-600/15 dark:bg-red-600/8 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-indigo-600/10 dark:bg-blue-600/5 rounded-full filter blur-3xl"></div>
        
        {/* Spotlight effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-transparent via-transparent to-white/30 dark:to-black/60"></div>
        
        {/* Particles with cinematic feel */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 dark:bg-amber-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float 8s ease-in-out infinite ${i * 0.3}s, flicker 3s ease-in-out infinite alternate`
            }}
          />
        ))}
        
        {/* Cinematic bars */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/50 dark:from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/50 dark:from-black to-transparent"></div>
      </div>

      {/* Subtle grid with cinematic feel */}
      <div className="absolute inset-0 opacity-5 bg-cinematic-grid"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8 animate-fade-in-cinematic">
            {/* Status Badge with cinematic styling */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-blue-600/20 dark:bg-amber-600/20 rounded-full blur-lg animate-pulse-cinematic"></div>
              <div className="relative px-6 py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-blue-500/30 dark:border-amber-500/30 text-blue-700 dark:text-amber-300 rounded-full text-sm font-medium flex items-center shadow-2xl">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse shadow-glow-blue dark:shadow-glow-amber"></div>
                🎬 Available for Projects
              </div>
            </div>

            {/* Main Heading with cinematic effect */}
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-amber-200 dark:via-yellow-300 dark:to-amber-400 bg-clip-text text-transparent font-black tracking-tight shadow-text">
                    AKILA
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-amber-200 dark:via-yellow-300 dark:to-amber-400 bg-clip-text text-transparent opacity-20 blur-sm">
                    AKILA
                  </span>
                </span>
                <br />
                <span className="text-gray-800 dark:text-gray-100 font-black tracking-wider drop-shadow-2xl">
                  Amarasinghe
                </span>
              </h1>
              
              {/* Typing Animation with cinematic style */}
              <div className="h-12 flex items-center">
                <span className="text-2xl text-blue-600 dark:text-amber-300 font-mono tracking-wide">
                  &gt; {displayText}
                  <span className="animate-blink-cinematic text-blue-700 dark:text-amber-400">█</span>
                </span>
              </div>
            </div>

            {/* Description with cinematic glow */}
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-lg leading-relaxed relative">
              <span className="relative z-10 drop-shadow-lg">
                Crafting cinematic digital experiences with dramatic flair and precision. 
                Where art meets technology in perfect harmony.
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 dark:from-amber-600/10 to-purple-600/10 dark:to-yellow-600/10 blur-2xl rounded-lg"></div>
            </p>

            {/* Cinematic Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-amber-700 dark:to-amber-600 text-white dark:text-black font-bold rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-amber-500 dark:to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative flex items-center font-black">
                  <Zap className="mr-2" size={20} />
                  ENTER PORTFOLIO
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                </span>
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-10 py-4 border-2 border-blue-500/50 dark:border-amber-500/50 text-blue-600 dark:text-amber-300 font-bold rounded-lg hover:bg-blue-500/10 dark:hover:bg-amber-500/10 hover:border-blue-400 dark:hover:border-amber-400 transition-all duration-500 relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-blue-500/5 dark:bg-amber-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="relative font-black">CONTACT</span>
              </button>
              
              <a
                href={cv}
                download="Akila_Sudeepa_Amarasinghe_CV.pdf"
                className="group px-8 py-4 bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 font-bold rounded-lg hover:border-blue-500/50 dark:hover:border-amber-500/50 hover:text-blue-600 dark:hover:text-amber-300 transition-all duration-500 shadow-xl"
              >
                <span className="flex items-center font-black">
                  <Download size={18} className="mr-2 group-hover:animate-bounce" />
                  PORTFOLIO.pdf
                </span>
              </a>
            </div>

            {/* Cinematic Skills Display */}
            <div className="space-y-4">
              <p className="text-blue-600 dark:text-amber-400 font-mono text-sm uppercase tracking-[0.3em] opacity-80">
                ── EXPERTISE ──
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code, label: 'Frontend', level: 85, color: 'from-blue-500 to-purple-500 dark:from-amber-500 dark:to-yellow-500' },
                  { icon: Layers, label: 'UI/UX', level: 90, color: 'from-purple-500 to-pink-500 dark:from-orange-500 dark:to-red-500' },
                  { icon: Database, label: 'Backend', level: 75, color: 'from-pink-500 to-red-500 dark:from-red-500 dark:to-pink-500' },
                  { icon: TestTube, label: 'Testing', level: 80, color: 'from-red-500 to-orange-500 dark:from-pink-500 dark:to-purple-500' }
                ].map((skill, index) => (
                  <div key={index} className="bg-white/60 dark:bg-black/60 backdrop-blur-sm border border-gray-300/50 dark:border-gray-800/50 rounded-lg p-4 hover:border-blue-500/30 dark:hover:border-amber-500/30 transition-all duration-500 group shadow-xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <skill.icon size={16} className="mr-2 text-blue-600 dark:text-amber-400 group-hover:animate-pulse" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{skill.label}</span>
                      </div>
                      <span className="text-blue-600 dark:text-amber-400 text-xs font-mono opacity-80">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200/80 dark:bg-gray-900/80 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1500 delay-500 shadow-glow`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image with Cinematic Effects */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right-cinematic">
            <div className="relative group">
              {/* Cinematic frame effect */}
              <div className="absolute -inset-8 opacity-40">
                <div className="w-full h-full border-2 border-blue-500/30 dark:border-amber-500/30 rounded-3xl"></div>
                <div className="absolute -inset-4 border border-blue-400/20 dark:border-amber-400/20 rounded-3xl"></div>
              </div>
              
              {/* Dramatic lighting effect */}
              <div className="absolute -inset-12 bg-gradient-radial from-blue-600/20 dark:from-amber-600/20 via-transparent to-transparent rounded-full blur-3xl group-hover:from-blue-500/30 dark:group-hover:from-amber-500/30 transition-all duration-1000"></div>
              
              {/* Image container with film effect */}
              <div className="relative">
                <img
                  src={bgimage}
                  alt="Akila Sudeepa Amarasinghe"
                  className="w-80 h-96 object-cover rounded-2xl shadow-2xl border-4 border-blue-500/20 dark:border-amber-500/20 transform group-hover:scale-105 transition-all duration-700 relative z-10 filter contrast-110 brightness-90"
                />
                
                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 dark:from-black/60 via-transparent to-purple-900/10 dark:to-amber-900/20 rounded-2xl"></div>
                
                {/* Film burn effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-600/10 dark:to-amber-600/10 rounded-2xl"></div>
                
                {/* Corner light leaks */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-blue-400/20 dark:bg-amber-400/20 rounded-br-full blur-xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-purple-400/10 dark:bg-red-400/10 rounded-tl-full blur-xl"></div>
                
                {/* Floating cinematic elements */}
                <Star className="absolute -top-8 -right-8 text-blue-400 dark:text-amber-400 animate-pulse-slow opacity-60" size={28} />
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-400/30 dark:from-amber-400/30 to-purple-500/30 dark:to-yellow-500/30 rounded-full blur-sm animate-pulse-cinematic"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic UI Elements */}
      <div className="absolute bottom-8 left-8 text-blue-600/60 dark:text-amber-400/60 font-mono text-sm tracking-wider">
        &gt; RECORDING... 
      </div>
      
      <div className="absolute top-8 right-8 text-blue-600/60 dark:text-amber-400/60 font-mono text-sm tracking-wider">
        SCENE: 001
      </div>

      {/* Cinematic Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-12 border-2 border-blue-400/50 dark:border-amber-400/50 rounded-full flex justify-center animate-pulse-cinematic">
          <div className="w-1 h-4 bg-blue-400 dark:bg-amber-400 rounded-full mt-2 animate-bounce shadow-glow-blue dark:shadow-glow-amber"></div>
        </div>
      </div>

      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes pulse-cinematic {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes blink-cinematic {
          0%, 70% { opacity: 1; }
          71%, 100% { opacity: 0; }
        }
        @keyframes fade-in-cinematic {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-right-cinematic {
          from { opacity: 0; transform: translateX(60px) scale(0.95); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        
        .animate-pulse-cinematic { animation: pulse-cinematic 3s ease-in-out infinite; }
        .animate-blink-cinematic { animation: blink-cinematic 1.5s infinite; }
        .animate-fade-in-cinematic { animation: fade-in-cinematic 1.2s ease-out; }
        .animate-fade-in-right-cinematic { animation: fade-in-right-cinematic 1.2s ease-out 0.3s both; }
        .animate-pulse-slow { animation: pulse-cinematic 4s ease-in-out infinite; }
        
        .shadow-glow { box-shadow: 0 0 20px currentColor; }
        .shadow-glow-blue { box-shadow: 0 0 15px #3b82f6; }
        .shadow-glow-amber { box-shadow: 0 0 15px #f59e0b; }
        .shadow-text { text-shadow: 0 0 30px rgba(245, 158, 11, 0.5); }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        .bg-noise {
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
        }
        
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

export default Hero;




