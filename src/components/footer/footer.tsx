import { FC } from 'react';

type FooterProps = {
    title: string;
};

export const Footer:FC<FooterProps> = ({
    title,
    children
}) => {
    return <footer>
        <h1>{title}</h1>
        {children}
    </footer>
}