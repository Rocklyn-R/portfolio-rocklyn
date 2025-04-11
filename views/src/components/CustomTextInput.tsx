import React from "react";

interface CustomTextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  name: string;
  className?: string;
  required?: boolean;
  validateFunction?: (value: string) => string;
  maxLength?: number
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({ validateFunction, maxLength, required, className = "w-full", name, placeholder, value, onChange }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    if (validateFunction) {
      newValue = validateFunction(newValue); // Apply custom validation
    }

    if (maxLength && newValue.length > maxLength) {
      newValue = newValue.slice(0, maxLength); // Enforce maxLength
    }

    onChange(newValue); // Update state with validated value
  }

  return (
    <div className="relative flex items-center justify-center w-full">
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        className={`${className} text-customPurple mt-2 p-2 border-2 border-customPurple focus:outline-none rounded-md`}
        required={required}
      />
    </div>
  );
};


