import { ToggleDarkMode } from "../ToggleDarkMode/ToggleDarkMode";
import { DarkModeWithToggleProps } from "../../types/types";

export const Navigation: React.FC<DarkModeWithToggleProps> = ({darkMode, toggleDarkMode}) => {

    const modeClassName = darkMode ? "dark" : "light";

    return (
        <nav className={`flex justify-between items-center min-w-full right-0 mt-0 fixed top-0 z-50 px-10 'bg-customPurple' ${modeClassName}` } id="nav">
        <ToggleDarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <ul className="space-x-16 text-customPink py-4">
            <li className="inline-flex hover:underline" id="home"><a>Home</a></li>
            <li className="inline-flex hover:underline" id="about"><a>About</a></li>
            <li className="inline-flex hover:underline" id="projects"><a>Skills</a></li>
            <li className="inline-flex hover:underline" id="skills"><a>Projects</a></li>
            <li className="inline-flex hover:underline" id="contact"><a>Contact</a></li>
        </ul>
    </nav>
    )
}