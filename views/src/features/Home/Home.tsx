import { forwardRef, useState, useEffect, useRef } from 'react';
import RocklynPic from '../../images/AnticaPic.jpeg';
import { BasicProps } from '../../types/types';
import bg1 from "../../images/Backgrounds/bg1.jpg"

interface HomeProps {
    onNavClick: (ref: React.RefObject<HTMLDivElement>) => void;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
}

export const Home = forwardRef<HTMLDivElement, HomeProps>(({ onNavClick, projectsRef, contactRef }, ref) => {
    const text = "Hi, I'm Rocklyn";
    const [letters, setLetters] = useState<string[]>([]);

    useEffect(() => {
        setLetters(text.split(""));
    }, []);


    /*  useEffect(() => {
           const timer = setTimeout(() => {
               setButtonVisible(true)
           }, 300);
           return () => clearTimeout(timer);
       }, [])*/


    const [inView, setInView] = useState(false);
    const [inViewDescriptor, setInViewDescriptor] = useState(false);
    const [inViewButtons, setInViewButtons] = useState(false);

    // Refs for each section
    const homeRef = useRef<HTMLDivElement>(null);

    // Intersection Observer callback
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // When the section is in view, set the state to true
                if (entry.target === homeRef.current) {
                    setInView(true);
                    setTimeout(() => {
                        setInViewDescriptor(true)
                    }, 1000)
                    setTimeout(() => {
                        setInViewButtons(true);
                    }, 1400)
                }
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5, // trigger when 50% of the section is in view
        });

        // Observe each section
        if (homeRef.current) observer.observe(homeRef.current);

        return () => {
            // Clean up the observer on unmount
            observer.disconnect();
        };
    }, []);


    return (
        <div
            ref={homeRef}
            className={`bg-customPinkLight dark:bg-customDarkPurple w-full h-screen flex items-center justify-center overflow-hidden dark:text-customPinkLight dark:border-b dark:border-customPink text-customPurple`}>

            <div className="flex flex-col items-center  w-full justify-center">

                <div className={`${inView ? "fade-in-scale-up" : "opacity-0"} flex justify-center`}>
                    <img
                        src={RocklynPic}
                        alt="Antica Rocklyn"
                        className="rounded-full shadow-lg object-cover w-3/4 sm:w-[330px] max-w-[330px] h-auto"
                    />

                </div>
                <div className="text-center flex flex-col space-y-4 mt-4">
                    <h1 className="sm:text-6xl xs:text-5xl text-4xl font-bold">
                        {letters.map((letter, index) => (
                            <span
                                key={index}
                                className={`${inView ? "slide-in-letter" : "opacity-0"}`}
                                style={{
                                    animationDelay: `${index * 0.1}s`, // Delay each letter a bit
                                }}
                            >
                                {letter === " " ? "\u00A0" : letter} {/* Ensure space is rendered */}
                            </span>
                        ))}
                    </h1>

                    <h3 className={`${inViewDescriptor ? "fade-in" : "opacity-0"} text-xl mx-4`} >
                        I'm a Full Stack Web Developer based in Ashburn, Virginia.
                    </h3>

                    <div className={`${inViewButtons ? "fade-in" : "opacity-0"} flex justify-center space-x-6 text-xl`}>

                        <button
                            onClick={() => onNavClick(projectsRef)}
                            className={`px-3 py-2 w-28 dark:border dark:border-customPink dark:hover:bg-customPurple hover:bg-customPinkMedium border-customPurpleLight rounded-sm border hover-scale`}
                        >
                            Projects
                        </button>

                        <button
                            onClick={() => onNavClick(contactRef)}
                            className={`px-3 py-2 w-28 dark:border dark:border-customPink dark:bg-customDarkPurple dark:hover:bg-customPurple hover:bg-customPurple bg-customPurpleLight rounded-sm text-customPinkLight hover-scale`}
                        >
                            Hire Me
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
});