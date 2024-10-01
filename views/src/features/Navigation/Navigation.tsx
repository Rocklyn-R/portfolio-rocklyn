import { ToggleDarkMode } from "../ToggleDarkMode/ToggleDarkMode";
import { DarkModeWithToggleProps } from "../../types/types";

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

    const modeClassName = darkMode ? "dark" : "light";

    return (
        <nav className={`flex justify-between items-center min-w-full right-0 mt-0 fixed top-0 z-50 px-10 'bg-customPurple' ${modeClassName}`} id="nav">
            <ToggleDarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <ul className="space-x-16 text-customPink py-4">
                <li className="inline-flex hover:underline" onClick={() => onNavClick(homeRef)}><a>Home</a></li>
                <li className="inline-flex hover:underline" onClick={() => onNavClick(aboutRef)}><a>About</a></li>
                <li className="inline-flex hover:underline" onClick={() => onNavClick(skillsRef)}><a>Skills</a></li>
                <li className="inline-flex hover:underline" onClick={() => onNavClick(projectsRef)}><a>Projects</a></li>
                <li className="inline-flex hover:underline" onClick={() => onNavClick(contactRef)}><a>Contact</a></li>
            </ul>
        </nav>
    );
}