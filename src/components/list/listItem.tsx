import { FC } from 'react';
import './listItem.scss';

type ListItemProps = {
    content: string,
    selectHandler: (content: string) => void;
};

export const ListItem: FC<ListItemProps> = ({
    content,
    selectHandler
}) => {
    return <li onClick={(event) => selectHandler((event.currentTarget.innerText))}>{content}</li>
}