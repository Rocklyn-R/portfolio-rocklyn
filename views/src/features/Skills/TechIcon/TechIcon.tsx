interface TechIconProps {
    techSrc: string;
    techText: string;
    bgColor: string;
    blackFont?: boolean;
}


export const TechIcon: React.FC<TechIconProps> = ({ techSrc, techText, bgColor, blackFont }) => {

    const textColor = blackFont ? 'text-black' : 'text-white'

    return (
        <div
            className={`flex h-fit items-center ${bgColor} p-1 rounded-md space-x-1 transition duration-150 w-fit `}
        >
            <img src={techSrc} width={20} />
            <p className={`text-sm ${textColor} font-normal ${blackFont ? 'black-skill-text' : 'white-skill-text'}`}>{techText}</p>
        </div>
    )
}