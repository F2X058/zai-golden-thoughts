import { FC } from 'react';

type HeaderProps = {
    title: string;
}

export const Header:FC<HeaderProps> = ({
    title,
    children
}) => {
    return <header>
        <h1>{title}</h1>
        {children}
    </header>
}