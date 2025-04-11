interface HeaderProps {
    text: string;
}

export const Header: React.FC<HeaderProps> = ( {text }) => {
    return (
        <h1 className="text-4xl font-bold pb-10">{text}</h1>
    )
}