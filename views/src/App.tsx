import React, { useState } from 'react';
import './App.css';
import { Navigation } from './features/Navigation/Navigation';
import { Home } from './features/Home/Home';
import { About } from './features/About/About';
import { Skills } from './features/Skills/Skills';
import { Projects } from './features/Projects/Projects';
import { Contact } from './features/Contact/Contact';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (isChecked: boolean) => {
    setDarkMode(isChecked);
    console.log(darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  }

  return (
    <div className='min-w-full flex flex-col'>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
}

export default App;
