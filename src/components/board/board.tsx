import { FC } from 'react';

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