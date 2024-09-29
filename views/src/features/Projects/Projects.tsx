import { DarkModeProps, Project } from "../../types/types";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { projects } from "../../data/data";

export const Projects: React.FC<DarkModeProps> = ({ darkMode }) => {



    return (
        <div className={`w-full py-20 space-y-10 flex flex-col items-center ${darkMode ? 'bg-customDarkPurple text-customPinkLight' : 'bg-customPurple text-customPink'} overflow-hidden`}>
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
    )
}