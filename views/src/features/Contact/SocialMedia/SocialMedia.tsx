import { DarkModeProps } from "../../../types/types";

interface SocialMediaProps extends DarkModeProps {
    src: string;
    name: string;
    phrase: string;
}

export const SocialMedia: React.FC<SocialMediaProps> = ({ src, name, phrase, darkMode }) => {
    return (
        <a className={`cursor-pointer flex px-6 py-3 space-x-4 border border-customPurpleLight rounded-md ${darkMode ? 'bg-customPurple text-customPinkLight' : 'bg-gray-100 text-customPurple'} shadow-lg`}>
               <img src={src} width={50} /> 
            <div>
                <h4 className="font-bold text-2xl">{name}</h4>
                <span className="font-medium opacity-70">{phrase}</span>
            </div>
        </a>
    )
}