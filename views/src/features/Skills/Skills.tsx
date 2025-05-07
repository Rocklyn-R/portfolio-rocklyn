import FrontEnd from "../../images/Front-End.png";
import BackEnd from "../../images/Back-End.png";
import Tools from "../../images/Tools.png";
import Html5 from "../../images/Html5.png";
import { TechIcon } from "./TechIcon/TechIcon";
import CSS3 from "../../images/CSS3.png";
import Javascript from "../../images/Javascript.png";
import Typescript from "../../images/Typescript.png";
import React from "../../images/React.svg";
import Redux from "../../images/Redux.svg";
import Tailwind from "../../images/Tailwind.svg";
import NodeJS from "../../images/Node.svg";
import Express from "../../images/Express.svg";
import Postgresql from "../../images/Postgres.svg";
import Git from "../../images/Git.svg"
import GitHub from "../../images/Github.svg";
import Heroku from "../../images/Heroku.svg";
import VSCode from "../../images/VSCode.svg";
import Postman from "../../images/Postman.svg";
import Webpack from "../../images/Webpack.svg";
import Jest from "../../images/Jest.svg";
import Netlify from "../../images/Netlify.svg";
import Postbird from "../../images/Postbird.svg";
import { BasicProps } from "../../types/types";
import { forwardRef } from "react";
import Render from "../../images/Render.jpg";
import { useState, useRef, useEffect } from "react";
import { Header } from "../../components/Header";

export const Skills = forwardRef<HTMLDivElement, BasicProps>(({ darkMode }, ref) => {

    const [inViewFrontEnd, setInViewFrontEnd] = useState(false);
    const [inViewBackEnd, setInViewBackEnd] = useState(false);
    const [inViewTools, setInViewTools] = useState(false);

    // Refs for each section
    const frontEndRef = useRef<HTMLDivElement>(null);
    const backEndRef = useRef<HTMLDivElement>(null);
    const toolsRef = useRef<HTMLDivElement>(null);

    // Intersection Observer callback
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // When the section is in view, set the state to true
                if (entry.target === frontEndRef.current) {
                    setInViewFrontEnd(true);
                } else if (entry.target === backEndRef.current) {
                    setInViewBackEnd(true);
                } else if (entry.target === toolsRef.current) {
                    setInViewTools(true);
                }
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5, // trigger when 50% of the section is in view
        });

        // Observe each section
        if (frontEndRef.current) observer.observe(frontEndRef.current);
        if (backEndRef.current) observer.observe(backEndRef.current);
        if (toolsRef.current) observer.observe(toolsRef.current);

        return () => {
            // Clean up the observer on unmount
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={ref} className={`border-t border-customPurple dark:border-customPink w-full py-10 flex flex-col items-center dark:bg-customDarkPurple dark:text-customPinkLight dar:border-b bg-customPinkLight text-customDark overflow-hidden`}>
            <Header text="Skills" />
            <div className="flex w-full sm:justify-evenly justify-center text-2xl font-semibold flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-4 sm:px-4 xs:px-8 px-4">
                <div ref={frontEndRef} className={`p-4 dark:bg-customPurple dark:rounded-md dark:border dark:border-customPink ${inViewFrontEnd ? 'sm:animate-slideInLeft fade-in' : 'opacity-0'} flex flex-col items-center lg:w-1/4 md:w-1/3 sm:w-1/3 sm:mx-0 space-y-10`}>
                    <div className={`w-full flex flex-col items-center border-b space-y-10 ${darkMode ? 'border-customPink' : 'border-customDark'} pb-10`}>
                        <img src={FrontEnd} width={100} alt="front-end" />
                        <p>Front-End</p>
                    </div>
                    <div className="flex items-center flex-wrap justify-center gap-2" id="front-end-skills">
                        <TechIcon
                            techSrc={Html5}
                            techText="HTML5"
                            bgColor="bg-htmlOrange"
                        />
                        <TechIcon
                            techSrc={CSS3}
                            techText="CSS3"
                            bgColor="bg-cssBlue"
                        />
                        <TechIcon
                            techSrc={Javascript}
                            techText="JavaScript"
                            bgColor="bg-javascriptYellow"
                            blackFont={true}
                        />
                        <TechIcon
                            techSrc={Typescript}
                            techText="TypeScript"
                            bgColor="bg-typescriptBlue"
                        />
                        <TechIcon
                            techSrc={React}
                            techText="React"
                            bgColor="bg-reactTurquoise"
                            blackFont={true}
                        />
                        <TechIcon
                            techSrc={Redux}
                            techText="Redux"
                            bgColor="bg-reduxPurple"
                        />
                        <TechIcon
                            techSrc={Tailwind}
                            techText="Tailwind CSS"
                            bgColor="bg-tailwindTurquoise"
                        />
                    </div>
                </div>
                <div ref={backEndRef} className={`p-4 ${darkMode ? 'bg-customPurple  rounded-md border border-customPink' : ''} ${inViewBackEnd ? 'fade-in' : 'opacity-0'} flex flex-col items-center lg:w-1/4 md:w-1/3 sm:w-1/3 sm:mx-0 space-y-10`}>
                    <div className={`w-full flex flex-col items-center space-y-10 border-b ${darkMode ? 'border-customPink' : 'border-customDark'} pb-10`}>
                        <img src={BackEnd} width={100} alt="back-end" />
                        <p>Back-End</p>
                    </div>
                    <div className="flex items-center flex-wrap gap-2 justify-center" id="back-end-skills">
                        <TechIcon
                            techSrc={NodeJS}
                            techText="Node.js"
                            bgColor="bg-nodeGreen"
                        />
                        <TechIcon
                            techSrc={Express}
                            techText="Express"
                            bgColor="bg-expressBlack"
                        />
                        <TechIcon
                            techSrc={Postgresql}
                            techText="PostgreSQL"
                            bgColor="bg-postgresBlue"
                        />
                    </div>
                </div>
                <div ref={toolsRef} className={`p-4 ${darkMode ? 'bg-customPurple rounded-md border border-customPink' : ''} ${inViewTools ? 'sm:animate-slideInRight fade-in' : 'opacity-0'} flex flex-col items-center lg:w-1/4 md:w-1/3 sm:w-1/3 sm:mx-0  space-y-10`}>
                    <div className={`w-full flex flex-col items-center space-y-10 border-b ${darkMode ? 'border-customPink' : 'border-customDark'} pb-10`}>
                        <img src={Tools} width={100} alt="tools" />
                        <p>Tools</p>
                    </div>
                    <div className="flex items-center flex-wrap gap-2 justify-center">
                        <TechIcon
                            techSrc={Git}
                            techText="Git"
                            bgColor="bg-gitOrange"
                        />
                        <TechIcon
                            techSrc={GitHub}
                            techText="GitHub"
                            bgColor="bg-githubBlack"
                        />
                        <TechIcon
                            techSrc={Heroku}
                            techText="Heroku"
                            bgColor="bg-herokuPurple"
                        />
                        <TechIcon
                            techSrc={Netlify}
                            techText="Netlify"
                            bgColor="bg-netlifyGreen"
                        />
                        <TechIcon
                            techSrc={VSCode}
                            techText="Visual Studio Code"
                            bgColor="bg-vscodeBlue"
                        />
                        <TechIcon
                            techSrc={Postman}
                            techText="Postman"
                            bgColor="bg-postmanOrange"
                        />
                        <TechIcon
                            techSrc={Postbird}
                            techText="PostBird"
                            bgColor="bg-postbirdBlue"
                        />
                        <TechIcon
                            techSrc={Webpack}
                            techText="Webpack"
                            bgColor="bg-webpackBlue"
                            blackFont={true}
                        />
                        <TechIcon
                            techSrc={Jest}
                            techText="Jest"
                            bgColor="bg-jestRed"
                        />
                        <TechIcon
                            techSrc={Render}
                            techText="Render"
                            bgColor="bg-black"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
});