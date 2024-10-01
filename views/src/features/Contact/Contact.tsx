import { BasicProps, DarkModeProps } from "../../types/types"
import { SocialMedia } from "./SocialMedia/SocialMedia";
import Gmail from "../../images/Gmail.svg";
import LinkedIn from "../../images/LinkedIn.png";
import GitHub from "../../images/Github2.svg";
import { forwardRef } from "react";

export const Contact = forwardRef<HTMLDivElement, BasicProps>(({ darkMode }, ref) => {
    return (
        <div ref={ref} className={`w-full py-20 space-y-10 flex flex-col items-center ${darkMode ? 'bg-customDarkPurple text-customPinkLight' : 'bg-customPinkLight text-customPurple'} overflow-hidden`}>
            <h1 className="text-4xl font-bold pb-4">Contact Me</h1>
            <div className="flex items-center justify-evenly w-2/3">
                <SocialMedia 
                    src={Gmail}
                    name="Email"
                    phrase="Let's get in touch."
                    darkMode={darkMode}
                />
                 <SocialMedia 
                    src={LinkedIn}
                    name="LinkedIn"
                    phrase="Let's connect."
                    darkMode={darkMode}
                />
                 <SocialMedia 
                    src={GitHub}
                    name="GitHub"
                    phrase="Check out my repos."
                    darkMode={darkMode}
                />
            </div>
        </div>
    )
})