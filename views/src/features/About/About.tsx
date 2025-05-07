import RocklynPic from "../../images/AnticaPic.jpeg";
import { useState, useRef, useEffect, forwardRef } from 'react';
import { BasicProps } from "../../types/types";
import { Header } from "../../components/Header";


export const About = forwardRef<HTMLDivElement, BasicProps>(({ darkMode }, ref) => {
    const [isVisible, setIsVisible] = useState(false);



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
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        // Ensure ref is defined and its current value is not null before observing
        const currentRef = (ref as React.RefObject<HTMLDivElement>).current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref]);

    return (
        <div
        ref={ref}
            className={`py-10 bg-customPurple dark:bg-customDarkPurple text-customDark w-full flex flex-col items-center overflow-hidden `}
        >
            <Header text="About Me" />
            <div className="flex flex-col md:flex-row items-center md:space-x-6 justify-center">
                <div
                    className={`rounded-full shadow-lg object-cover transition-all duration-1000 ${isVisible ? "animate-slideInLeft" : "opacity-0"
                        }`}
                >
                    <img className="w-64 h-64 rounded-full shadow-lg object-cover" src={RocklynPic} />
                </div>
                <div
                    className={`md:w-1/2 mx-4 md:text-left text-center space-y-4 rounded-md px-4 transition-all duration-1000 ${isVisible ? "animate-slideInRight" : "opacity-0"
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
                        years and have performed as a singer on the Croatian coast. When I'm
                        not coding, you can find me singing and recording song covers at home or
                        lifting weights at the gym.
                    </p>
                </div>
            </div>
        </div>
    );
});