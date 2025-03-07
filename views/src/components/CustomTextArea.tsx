interface CustomTextAreaProps {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    name: string;
    className?: string;
    required?: boolean;
    maxLength?: number;
}

export const CustomTextArea: React.FC<CustomTextAreaProps> = ({
    required,
    className = "w-full",
    name,
    placeholder,
    value,
    onChange,
    maxLength,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let newValue = e.target.value;

        if (maxLength && newValue.length > maxLength) {
            newValue = newValue.slice(0, maxLength); // Enforce maxLength
        }

        onChange(newValue);
    };

    return (
        <div className="relative flex items-center justify-center w-full">
            <textarea
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={handleChange}
                maxLength={maxLength}
                className={`${className} resize-y min-h-[6rem] max-h-[11.9rem] text-customPurple mt-2 p-2 border-2 border-customPinkMedium focus:outline-none rounded-md`}
                required={required}
                rows={3} // Default rows for a good height
            />
        </div>
    );
};