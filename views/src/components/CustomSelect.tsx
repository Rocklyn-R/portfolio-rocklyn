import { useState, useRef, useEffect } from "react";

interface CustomSelectProps {
    options: string[]; // Options array
    value: string; // Current selected value
    onChange: (selectedValue: string) => void; // Handler for selection
    placeholder?: string; // Placeholder text
    className?: string; // Additional custom classes

}
export const CustomSelect: React.FC<CustomSelectProps> = ({
    options,
    value,
    onChange,
    placeholder = "Select reason",
    className = "",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);


    const handleSelect = (selectedName: string) => {
        onChange(selectedName); // Call the external handler
        setIsOpen(false); // Close the dropdown
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div ref={selectRef} className={`relative ${className} `}>
            {/* Hidden Input for Required Validation */}
            <input
                type="text"
                value={value || ""}
                required={true} // Enforces validation
                className="sr-only h-full w-full" // Hides input from UI
                onChange={() => { }} // Prevents React warnings
            />

            <div
                className={`${isOpen ? " border-2 border-customPink text-customPurple rounded-t-md" : "rounded-md border-2 border-customPink"} ${value !== "Select reason" ? "text-customPurple" : "text-gray-400"
                    } p-2 w-full bg-white cursor-pointer `}
                onClick={() => setIsOpen(!isOpen)}
            >
                {value || placeholder}
                <span className="absolute text-gray-400 inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg
                        className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : ""
                            }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </div>

            {isOpen && (
                <div className={`text-customPurple absolute z-10 -mt-1 w-full bg-white border-b-2 border-x-2 border-customPink rounded-b-md shadow-lg max-h-[25vh] overflow-y-auto`}>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(option)}
                            className={` p-2 hover:bg-customPinkLight cursor-pointer`}
                        >
                            {option || placeholder}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}    