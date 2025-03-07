import { ToggleDarkMode } from "../ToggleDarkMode/ToggleDarkMode";
import { DarkModeWithToggleProps } from "../../types/types";
import { Menu, X } from 'lucide-react';
import { useState } from "react";


interface NavigationProps extends DarkModeWithToggleProps {
    onNavClick: (arg0: React.RefObject<HTMLDivElement>) => void;
    homeRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    skillsRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
}

export const Navigation: React.FC<NavigationProps> = ({
    onNavClick, 
    homeRef, 
    aboutRef, 
    skillsRef, 
    projectsRef, 
    contactRef, 
    darkMode, 
    toggleDarkMode
}) => {

    const [isOpen, setIsOpen] = useState(false); // State to manage the overlay
    const [isMenuClicked, setIsMenuClicked] = useState(false); // Track whether the menu was clicked


    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle menu visibility
        setIsMenuClicked(!isMenuClicked); // Set menu clicked to true when the button is clicked
        
    };

    return (
        <nav className={`bg-customPurple dark:border-b dark:border-customPink dark:bg-customDarkPurple flex py-4 justify-between items-center min-w-full fixed z-50 px-10 text-customPink`} id="nav">
            <ToggleDarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            
            {/* Navigation Links */}
            <ul className="md:block hidden space-x-16 text-customPink">
                <li className="inline-flex hover:underline" onClick={() => onNavClick(homeRef)}><button>Home</button></li>
                <li className="inline-flex hover:underline" onClick={() => onNavClick(aboutRef)}><button>About</button></li>
                <li className="inline-flex hover:underline" onClick={() => onNavClick(skillsRef)}><button>Skills</button></li>
                <li className="inline-flex hover:underline" onClick={() => onNavClick(projectsRef)}><button>Projects</button></li>
                <li className="inline-flex hover:underline" onClick={() => onNavClick(contactRef)}><button>Contact</button></li>
            </ul>

            {/* Menu Icon (Hamburger Icon) */}
            <button 
                className={`md:hidden z-50 block transform transition-transform duration-300 ${isMenuClicked ? 'rotate-180' : '-rotate-180'}`} 
                onClick={toggleMenu}
            >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Overlay (Initially Hidden, Shows When Menu is Open) */}
            <div 
                className={`fixed -top-5 right-0 w-full h-full transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                onClick={toggleMenu} // Close the overlay when clicked
            >
                <div className="flex justify-end p-4">
                    {/* X button that spins when menu is open */}
            
                </div>
                {/* Here you can add menu items, links, or anything you want inside the overlay */}
                <div className="dark:bg-customDarkPurple bg-customPurple flex flex-col items-center justify-center h-full text-customPink space-y-4">
                    <button onClick={() => onNavClick(homeRef)}>Home</button>
                    <button onClick={() => onNavClick(aboutRef)}>About</button>
                    <button onClick={() => onNavClick(skillsRef)}>Skills</button>
                    <button onClick={() => onNavClick(projectsRef)}>Projects</button>
                    <button onClick={() => onNavClick(contactRef)}>Contact</button>
                </div>
            </div>
        </nav>
    );
};