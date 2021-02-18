import { FC, Children } from 'react';
import { ListItem } from './listItem';


type ListProps = {
    list: Array<string>;
    selectHandler: (content: string) => void;
}

export const List: FC<ListProps> = ({
    list,
    selectHandler
}) => {
    return <ul>
        {Children.map(list, (item) => <ListItem content={item} selectHandler={selectHandler}/>)}
    </ul>
}