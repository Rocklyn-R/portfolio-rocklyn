
export interface DarkModeProps {
    darkMode: boolean
}
export interface DarkModeWithToggleProps extends DarkModeProps {
        toggleDarkMode: (arg0: boolean) => void;
}

export interface Project {
    src: string;
    name: string;
    title: string;
    description: string;
    techIcons: TechIcon [];
    demo: boolean;
}

export interface TechIcon {
    techSrc: string;
    techText: string;
    bgColor: string;
    blackFont?: boolean;
}

export interface BasicProps extends DarkModeProps {
    ref: React.RefObject<HTMLDivElement>
}
