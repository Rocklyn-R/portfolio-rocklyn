import React, { useState, useRef } from 'react';
import './App.css';
import { Navigation } from './features/Navigation/Navigation';
import { Home } from './features/Home/Home';
import { About } from './features/About/About';
import { Skills } from './features/Skills/Skills';
import { Projects } from './features/Projects/Projects';
import { Contact } from './features/Contact/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const toggleDarkMode = (isChecked: boolean) => {
    setDarkMode(isChecked);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-w-full flex flex-col">
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
      <Home ref={homeRef} darkMode={darkMode} />
      <About ref={aboutRef} darkMode={darkMode} />
      <Skills ref={skillsRef} darkMode={darkMode} />
      <Projects ref={projectsRef} darkMode={darkMode} />
      <Contact ref={contactRef} darkMode={darkMode} />
    </div>
  );
}

export default App;
