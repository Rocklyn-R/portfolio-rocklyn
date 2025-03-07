import React, { useState, useRef } from 'react';
import './App.css';
import { Navigation } from './features/Navigation/Navigation';
import { Home } from './features/Home/Home';
import { About } from './features/About/About';
import { Skills } from './features/Skills/Skills';
import { Projects } from './features/Projects/Projects';
import { Contact } from './features/Contact/Contact';
import bg1 from "./images/Backgrounds/bg1.jpg"
import bg2 from "./images/Backgrounds/bg2.jpg";
import bg3 from "./images/Backgrounds/bg3.jpg";
import bg4 from "./images/Backgrounds/bg.jpg";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const toggleDarkMode = (isChecked: boolean) => {
    setDarkMode(isChecked);
    if (isChecked) {
      document.documentElement.classList.add('dark'); // Adds the 'dark' class to <html> tag
    } else {
      document.documentElement.classList.remove('dark'); // Removes the 'dark' class when light mode is selected
    }
  };
  const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-w-full flex flex-col">

      {/* Navigation */}
      <Navigation
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        onNavClick={handleScrollTo}
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      {/* Home Section */}
      <Home onNavClick={handleScrollTo} ref={homeRef} projectsRef={projectsRef} contactRef={contactRef} />


    {/* Other sections */}
    <About ref={aboutRef} darkMode={darkMode} />
    <Skills ref={skillsRef} darkMode={darkMode} />
    <Projects ref={projectsRef} darkMode={darkMode} />
    <Contact ref={contactRef} darkMode={darkMode} />
  </div>
);
}

export default App;
