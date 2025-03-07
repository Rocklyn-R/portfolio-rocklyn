import { useState, useEffect } from "react";
import { DarkModeWithToggleProps } from "../../types/types";



export const ToggleDarkMode: React.FC<DarkModeWithToggleProps> = ({ darkMode, toggleDarkMode }) => {
    const [isChecked, setIsChecked] = useState<boolean>(
        localStorage.getItem('isChecked') === 'true'
    );

    useEffect(() => {
        localStorage.setItem('isChecked', isChecked.toString());
    }, [isChecked]);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        toggleDarkMode(isChecked);
    }, [isChecked, toggleDarkMode]);

    return (
        <button className="toggle-button" id="toggle">
            <input
                type="checkbox"
                name=""
                className="cursor-pointer"
                checked={isChecked}
                onChange={handleChange}
            />
        </button>
    )
}