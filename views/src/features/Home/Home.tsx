import { useState, useEffect } from 'react';
import RocklynPic from '../../images/AnticaPic.jpeg';
import { DarkModeProps } from '../../types/types';

export const Home: React.FC<DarkModeProps> = ({ darkMode }) => {
    const [h3Visible, setH3Visible] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(false);

    const modeClassName = darkMode ? "dark" : "light";

    useEffect(() => {
        const timer = setTimeout(() => {
            setButtonVisible(true)
        }, 300);
        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setH3Visible(true); // Set h3 to visible after 1.5 seconds
        }, 500); // Adjust the delay as needed for your animation timing

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);



    return (
        <div className={`w-full h-screen flex items-center justify-center overflow-hidden ${darkMode ? 'bg-customDarkPurple text-customPinkLight border-b border-customPinkLight' : 'bg-customPinkLight text-customPurple'}`}>

            <div className="flex items-center space-x-10 w-full justify-center">


                <div className="text-left flex flex-col space-y-4">
                    <h1 className="text-6xl font-bold fade-in">
                        Hi, I'm Rocklyn!
                    </h1>

                    <h3 className={`text-xl ${h3Visible ? 'visible' : 'invisible'} fade-in`}
                        style={{ animationDelay: '.45s' }} >
                        I'm a Full Stack Web Developer based in Ashburn, Virginia.
                    </h3>

                    <div className='flex space-x-6 text-xl'>
                        <div className='slide-in'>
                            <button
                                className={`px-3 py-2 ${darkMode ? 'border-customPinkLight' : 'hover:bg-customPinkMedium border-customPurpleLight'} rounded-sm border hover-scale`}
                            >
                                About Me
                            </button>
                        </div>
                        {buttonVisible && (
                            <div className='slide-in'>
                                <button
                                    className={`px-3 py-2  ${darkMode ? 'border border-customPinkLight' : 'hover:bg-customPurple bg-customPurpleLight'} rounded-sm text-customPinkLight hover-scale`}
                                >
                                    Hire Me
                                </button>
                            </div>

                        )}

                    </div>
                </div>
                <div className="animate-slideInRight">
                    <img
                        width={400}
                        src={RocklynPic}
                        alt="Antica Rocklyn"
                        className="rounded-full shadow-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
}