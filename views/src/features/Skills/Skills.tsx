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
import { DarkModeProps } from "../../types/types";


export const Skills: React.FC<DarkModeProps> = ({ darkMode }) => {



    return (
        <div className={`w-full py-20 space-y-10 flex flex-col items-center ${darkMode ? 'bg-customDarkPurple text-customPinkLight border-b border-customPinkLight' : 'bg-customPinkLight text-customPurple'} overflow-hidden`}>
            <h1 className="text-4xl font-bold pb-4">My Skills</h1>
            <div className="flex w-full justify-evenly text-2xl font-semibold">
                <div className={`p-4 ${darkMode ? 'bg-customPurple  rounded-3xl' : ''} animate-slideInLeft flex flex-col items-center w-1/5 space-y-10`}>
                    <div className={`w-full flex flex-col items-center space-y-10 border-b-2 ${darkMode ? 'border-customPinkLight' : 'border-customPurple'} pb-10`}>
                        <img src={FrontEnd} width={100} />
                        <p>Front-End</p>
                    </div>
                    <div className="flex items-center flex-wrap gap-2" id="front-end-skills">
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
                <div className={`p-4 ${darkMode ? 'bg-customPurple  rounded-3xl' : ''} animate-slideInLeft flex flex-col items-center w-1/5 space-y-10`}>
                    <div className={`w-full flex flex-col items-center space-y-10 border-b-2 ${darkMode ? 'border-customPinkLight' : 'border-customPurple'} pb-10`}>
                        <img src={BackEnd} width={100} />
                        <p>Back-End</p>
                    </div>
                    <div className="flex items-center flex-wrap gap-2" id="back-end-skills">
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
                <div className={`p-4 ${darkMode ? 'bg-customPurple  rounded-3xl' : ''} animate-slideInLeft flex flex-col items-center w-1/5 space-y-10`}>
                    <div className={`w-full flex flex-col items-center space-y-10 border-b-2 ${darkMode ? 'border-customPinkLight' : 'border-customPurple'} pb-10`}>
                        <img src={Tools} width={100} />
                        <p>Tools</p>
                    </div>
                    <div className="flex items-center flex-wrap gap-2">
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
                    </div>
                </div>

            </div>

        </div>
    )
}