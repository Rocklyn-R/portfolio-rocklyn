import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { Navigation } from './features/Navigation/Navigation';
import { Home } from './features/Home/Home';
import { About } from './features/About/About';
import { Skills } from './features/Skills/Skills';
import { Projects } from './features/Projects/Projects';
import { Contact } from './features/Contact/Contact';
import { Certificates } from './features/Certificates/Certificates';
import { ChevronDown, ChevronUp } from 'lucide-react';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [atBottom, setAtBottom] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);


  const toggleDarkMode = (isChecked: boolean) => {
    setDarkMode(isChecked);
    if (isChecked) {
      document.documentElement.classList.add('dark'); // Adds the 'dark' class to <html> tag
    } else {
      document.documentElement.classList.remove('dark'); // Removes the 'dark' class when light mode is selected
    }
  };

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const offset = 60; // Adjust this based on your navbar height (e.g., h-16 = 64px)
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // 150ms debounce after scroll stops

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= docHeight - 10) {
        setAtBottom(true);
      } else {
        setAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


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
        certificatesRef={certificatesRef}
        contactRef={contactRef}
      />

      {/* Home Section */}
      <Home onNavClick={handleScrollTo} homeRef={homeRef} projectsRef={projectsRef} contactRef={contactRef} />


      {/* Other sections */}
      <About ref={aboutRef} darkMode={darkMode} />
      <Skills ref={skillsRef} darkMode={darkMode} />
      <Projects ref={projectsRef} darkMode={darkMode} />
      <Certificates ref={certificatesRef} darkMode={darkMode} />
      <Contact ref={contactRef} darkMode={darkMode} />
      {!isScrolling && (
        <button
          onClick={() => {
            window.scrollTo({
              top: atBottom ? 0 : document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
          }}

          className={`fixed bottom-4 right-4 z-50 p-3 rounded-full bg-customDark text-customPinkLight shadow-xl hover:bg-customDarkAccent transition`}
        >
          {atBottom ? (
            <ChevronUp />
          ) :
            <ChevronDown />
          }
        </button>
      )}

    </div>

  );
}

export default App;
