import { FC } from 'react';

import './board.scss'

type BoardProps = {
    content: string;
}

export const Board: FC<BoardProps> = ({
    content
}) => {

    return <div>
        <p>{content}</p>
    </div>
}