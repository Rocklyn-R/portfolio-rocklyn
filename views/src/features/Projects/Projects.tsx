import { BasicProps } from "../../types/types";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { projects } from "../../data/data";
import { forwardRef, useState, useRef, useEffect } from "react";

export const Projects = forwardRef<HTMLDivElement, BasicProps>(({ darkMode }, ref) => {
    return (
        <div ref={ref} className={`dark:border-t dark:border-customPink w-full py-20 space-y-10 flex flex-col items-center 
            ${darkMode ? 'bg-customDarkPurple text-customPinkLight border-b border-customPink' : 'bg-customPurple text-customPink'} overflow-hidden`}
        >
            <h1 className="text-4xl font-bold pb-4">Projects</h1>

            {/* Responsive Grid Layout */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 
                lg:gap-4 md:gap-6 gap-8 w-full max-w-[90%] mx-auto"
            >
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        index={index}
                        project={project}
                        darkMode={darkMode}
                    />
                ))}
            </div>
        </div>
    );
});
