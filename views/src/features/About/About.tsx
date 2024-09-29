import RocklynPic from "../../images/AnticaPic.jpeg";
import { useState, useRef, useEffect } from 'react';
import { DarkModeProps } from "../../types/types";

export const About: React.FC<DarkModeProps> = ({darkMode}) => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

    const modeClassName = darkMode ? "dark" : "light";

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // Stop observing after animation starts
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 20% of the element is visible
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) observer.unobserve(aboutRef.current);
        };
    }, []);

    return (
        <div
            ref={aboutRef}
            className={`w-full py-20 space-y-4 flex flex-col items-center overflow-hidden ${modeClassName}`}
        >
            <h1 className="text-4xl font-bold pb-4">About Me</h1>
            <div className="flex items-center space-x-6 justify-center">
                <div
                    className={`w-64 h-64 rounded-full shadow-lg object-cover transition-all duration-1000 ${isVisible ? "animate-slideInLeft" : "opacity-0"
                        }`}
                >
                    <img className="w-64 h-64 rounded-full shadow-lg object-cover" src={RocklynPic} />
                </div>
                <div
                    className={`w-1/2 space-y-4 rounded-md p-4 transition-all duration-1000 ${isVisible ? "animate-slideInRight" : "opacity-0"
                        }`}
                >
                    <p>
                        I am Antica Rocklyn Rusinovic, a Full Stack Web Developer with a passion for
                        building beautiful, user-friendly web applications and websites. I excel at
                        turning complex problems into effective solutions and am committed to
                        delivering high-quality, functional code. I value collaboration and enjoy
                        working with diverse teams to share ideas and foster creativity. I am
                        confident that my quick learning ability and adaptability make me a valuable
                        asset to any web development team.
                    </p>
                    <p>
                        In addition to my tech skills, I have been a certified personal trainer for 6
                        years and have performed as a singer all over the Croatian coast. When I'm
                        not coding, you can find me singing and recording song covers at home or
                        lifting weights at the gym.
                    </p>
                </div>
            </div>
        </div>
    );
};