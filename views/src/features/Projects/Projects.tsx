import { DarkModeProps, Project } from "../../types/types";
import TaskMaster from "../../images/TaskMaster.png";
import { TechIcon } from "../Skills/TechIcon/TechIcon";
import CSS3 from "../../images/CSS3.png";
import Javascript from "../../images/Javascript.png";
import Typescript from "../../images/Typescript.png";
import React from "../../images/React.svg";
import Redux from "../../images/Redux.svg";
import Tailwind from "../../images/Tailwind.svg";
import NodeJS from "../../images/Node.svg";
import Express from "../../images/Express.svg";
import Postgresql from "../../images/Postgres.svg";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import RhythmRealm from "../../images/RhythmRealm.png";
import RedditLite from "../../images/RedditLite.png";

export const Projects: React.FC<DarkModeProps> = ({ darkMode }) => {


    const techIcons = [
        {
            techSrc: Javascript,
            techText: 'Javascript',
            bgColor: 'bg-javascriptYellow',
            blackFont: true
        },
        {
            techSrc: React,
            techText: 'React',
            bgColor: 'bg-reactTurquoise',
            blackFont: true
        },
        {
            techSrc: Redux,
            techText: 'Redux',
            bgColor: 'bg-reduxPurple',
            blackFont: false
        },
        {
            techSrc: CSS3,
            techText: 'CSS3',
            bgColor: 'bg-cssBlue',
            blackFont: false
        },
        {
            techSrc: NodeJS,
            techText: 'Node.js',
            bgColor: 'bg-nodeGreen',
            blackFont: false
        },
        {
            techSrc: Express,
            techText: 'Express',
            bgColor: 'bg-expressBlack',
            blackFont: false
        },
        {
            techSrc: Postgresql,
            techText: 'PostgreSQL',
            bgColor: 'bg-postgresBlue',
            blackFont: false
        },
        {
            techSrc: Typescript,
            techText: 'TypeScript',
            bgColor: 'bg-typescriptBlue',
            blackFont: false
        },
        {
            techSrc: Tailwind,
            techText: 'Tailwind CSS',
            bgColor: 'bg-tailwindTurquoise',
            blackFont: false
        }]

    const projects: Project[] = [
        {
            src: RhythmRealm,
            name: 'Rhythm Realm',
            title: 'E-Commerce Website for Musical Instruments',
            description: 'Rhythm Realm is an online store that allows buyers to log in, browse through multiple categories of musical instruments, pick out products, add products to wish list, add them to cart and complete the purchase.',
            techIcons: [
                techIcons[0], techIcons[7], techIcons[1], techIcons[2], techIcons[8], techIcons[4], techIcons[5], techIcons[6]
            ]
        },
        {
            src: TaskMaster,
            name: 'TaskMaster',
            title: 'Gamified Productivity App',
            description: 'TaskMaster is a productivity app that gamifies completing tasks. It features a to-do list with a coin reward system and custom rewards as well as a pomodoro focus timer that allows you to sell pomodoros for coins.',
            techIcons: [
                techIcons[0], techIcons[7], techIcons[1],
                techIcons[2], techIcons[3], techIcons[4], techIcons[5], techIcons[6]
            ],
        },
        {
            src: RedditLite,
            name: 'RedditLite',
            title: "Reddit's most popular subreddits",
            description: "A read-only application that utilizes the Reddit API to display Reddit's most popular subreddits and their comments. Users can also search for their own subreddits.",
            techIcons: [
                techIcons[0], techIcons[1], techIcons[2], techIcons[3]
            ]
        }
    ]

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