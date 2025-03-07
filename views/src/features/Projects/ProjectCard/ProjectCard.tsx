import { Project } from "../../../types/types";
import { TechIcon } from "../..//Skills/TechIcon/TechIcon";
import { useState, useRef, useEffect } from "react";

interface ProjectCardProps {
    project: Project;
    darkMode: boolean;
    index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ index, project, darkMode }) => {
    const [inView, setInView] = useState(false);
    const projectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        observer.unobserve(entry.target); // Stop observing once it's in view
                    }
                });
            },
            { threshold: 0.3 } // Trigger animation when 30% is visible
        );

        if (projectRef.current) observer.observe(projectRef.current);

        return () => observer.disconnect();
    }, []);

    const animationClass = inView
        ? index === 0
            ? "lg:animate-slideInLeft md:animate-slideInLeft fade-in"
            : index === 1
                ? "lg:fade-in md:animate-slideInRight fade-in"
                : index === 2
                    ? "lg:animate-slideInRight md:animate-slideInLeft fade-in"
                    : ""
        : "opacity-0"; // Ensure it starts hidden



    return (
        <div key={index} ref={projectRef}
            className={`${animationClass} flex flex-col w-full justify-center items-center dark:border dark:border-customPink dark:bg-customPurple dark:text-customPinkLight bg-customPinkLight text-customPurple rounded-md`}>
            <img src={project.src} width={400} className="w-full rounded-t-md" />
            <div className="px-4 space-y-2 flex-grow py-2">
                <h3 className="text-3xl font-bold">{project.name}</h3>
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p className="text-sm-md">{project.description}</p>
                <h4 className={`text-xl font-semibold border-b ${darkMode ? 'border-customPink' : 'border-customPurple'} pb-2`}>Technologies</h4>
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
                        <h4 className={`text-xl font-semibold border-b ${darkMode ? 'border-customPink' : 'border-customPurple'} pb-2`}>Demo Account</h4>
                        <p className="mt-2"><span className="font-semibold">Username:</span> demo@example.com</p>
                        <p className="mt-1"><span className="font-semibold">Password:</span> demo123</p>
                    </div>
                )}

            </div>
            <div className="w-full flex justify-evenly pt-2 self-end pb-4">
                <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`cursor-pointer px-3 py-2 ${darkMode ? 'border-customPink hover:bg-customDarkPurple' : 'hover:bg-customPinkMedium border-customPurpleLight text-customPurple'} rounded-sm border hover-scale`}
                >Live Demo</a>
                <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`cursor-pointer px-3 py-2  ${darkMode ? 'border border-customPink hover:bg-customDarkPurple' : 'hover:bg-customPurple bg-customPurpleLight'} rounded-sm text-customPinkLight hover-scale`}
                >Source Code</a>
            </div>

        </div>
    )
}