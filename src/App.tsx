import React from 'react';
import { ThemeProvider } from './components/ThemeContext'; // Adjust the path if needed
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Education from './components/Education';
import Services from './components/Services';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
        <Header />
        <main>
          <Hero />
          <About />
          <Education />
          <Projects />
          <Skills />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
