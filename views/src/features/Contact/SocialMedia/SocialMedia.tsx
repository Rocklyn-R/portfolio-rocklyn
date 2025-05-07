import { DarkModeProps } from "../../../types/types";

interface SocialMediaProps extends DarkModeProps {
    src: string;
    name: string;
    phrase: string;
    href: string;
}

export const SocialMedia: React.FC<SocialMediaProps> = ({ href, src, name, phrase, darkMode }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`dark:border dark:border-customPink cursor-pointer flex px-6 w-[17rem] py-3 space-x-4 border border-customDark rounded-md ${darkMode ? 'bg-customPurple text-customPinkLight' : 'bg-customPinkLight text-customDark'} shadow-lg`}>
               <img src={src} width={50} /> 
            <div>
                <h4 className="font-bold text-2xl">{name}</h4>
                <span className="font-medium opacity-70">{phrase}</span>
            </div>
        </a>
    )
}