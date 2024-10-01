import { BasicProps } from "../../types/types";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { projects } from "../../data/data";
import { forwardRef } from "react";

export const Projects = forwardRef<HTMLDivElement, BasicProps>(({ darkMode }, ref) => {



    return (
        <div ref={ref} className={`w-full py-20 space-y-10 flex flex-col items-center ${darkMode ? 'bg-customDarkPurple text-customPinkLight border-b border-customPinkLight' : 'bg-customPurple text-customPink'} overflow-hidden`}>
            <h1 className="text-4xl font-bold pb-4">Projects</h1>
            <div className="flex w-full justify-evenly">
                {projects.map(project => (
                    <ProjectCard
                        project={project}
                        darkMode={darkMode}
                    />
                ))}
            </div>
        </div>
    )})