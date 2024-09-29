import { DarkModeProps, Project } from "../../../types/types";
import TaskMaster from "../../../images/TaskMaster.png";
import { TechIcon } from "../..//Skills/TechIcon/TechIcon";
import CSS3 from "../../../images/CSS3.png";
import Javascript from "../../../images/Javascript.png";
import Typescript from "../../../images/Typescript.png";
import React from "../../../images/React.svg";
import Redux from "../../../images/Redux.svg";
import Tailwind from "../../../images/Tailwind.svg";
import NodeJS from "../../../images/Node.svg";
import Express from "../../../images/Express.svg";
import Postgresql from "../../../images/Postgres.svg";

interface ProjectCardProps {
    project: Project;
    darkMode: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, darkMode }) => {
    return (
        <div className={`flex flex-col w-[27%] items-center border border-customPinkLight ${darkMode ? 'bg-customPurple text-customPinkLight' : 'bg-customPinkLight text-customPurple'} rounded-md`}>
            <img src={project.src} width={400} className="w-full border-t border-customPinkLight rounded-t-md" />
            <div className="px-4 space-y-2 flex-grow py-2">
                <h3 className="text-3xl font-bold">{project.name}</h3>
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p className="text-sm-md">{project.description}</p>
                <h4 className={`text-xl font-semibold border-b ${darkMode ? 'border-customPinkLight' : 'border-customPurple'} pb-2`}>Technologies</h4>
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.techIcons.map(techIcon => (
                        <TechIcon
                            techSrc={techIcon.techSrc}
                            techText={techIcon.techText}
                            bgColor={techIcon.bgColor}
                            blackFont={techIcon.blackFont}
                        />
                    ))}
                </div>
                {project.demo && (
                    <div className="">
                        <h4 className={`text-xl font-semibold border-b ${darkMode ? 'border-customPinkLight' : 'border-customPurple'} pb-2`}>Demo Account</h4>
                        <p className="mt-2"><span className="font-semibold">Username:</span> demo@example.com</p>
                        <p className="mt-1"><span className="font-semibold">Password:</span> demo123</p>
                    </div>
                )}

            </div>
            <div className="w-full flex justify-evenly pt-2 self-end pb-4">
                <button className={`px-3 py-2 ${darkMode ? 'border-customPinkLight' : 'hover:bg-customPinkMedium border-customPurpleLight'} rounded-sm border hover-scale`}>Live Demo</button>
                <button className={`px-3 py-2  ${darkMode ? 'border border-customPinkLight' : 'hover:bg-customPurple bg-customPurpleLight'} rounded-sm text-customPinkLight hover-scale`}>Source Code</button>
            </div>

        </div>
    )
}