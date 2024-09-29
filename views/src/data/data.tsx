import TaskMaster from "../images/TaskMaster.png"
import CSS3 from "../images/CSS3.png";
import Javascript from "../images/Javascript.png";
import Typescript from "../images/Typescript.png";
import React from "../images/React.svg";
import Redux from "../images/Redux.svg";
import Tailwind from "../images/Tailwind.svg";
import NodeJS from "../images/Node.svg";
import Express from "../images/Express.svg";
import Postgresql from "../images/Postgres.svg";
import RhythmRealm from "../images/RhythmRealm.png";
import RedditLite from "../images/RedditLite.png";
import { Project } from "../types/types";

export const techIcons = [
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

export const projects: Project[] = [
    {
        src: RhythmRealm,
        name: 'Rhythm Realm',
        title: 'E-Commerce Website for Musical Instruments',
        description: 'Rhythm Realm is an online store that allows buyers to log in, browse through multiple categories and subcategories of musical instruments, pick out products, add products to wish list, add them to cart and complete the purchase.',
        techIcons: [
            techIcons[0], techIcons[7], techIcons[1], techIcons[2], techIcons[8], techIcons[4], techIcons[5], techIcons[6]
        ],
        demo: true
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
        demo: true
    },
    {
        src: RedditLite,
        name: 'RedditLite',
        title: "Reddit's Most Popular Subreddits",
        description: "RedditLite is a read-only application that utilizes the Reddit API to display Reddit's most popular subreddits, their top posts, as well as their comments. Users can also search for their own subreddits.",
        techIcons: [
            techIcons[0], techIcons[1], techIcons[2], techIcons[3]
        ],
        demo: false
    }
]