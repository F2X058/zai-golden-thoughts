import { FC, useState } from 'react';
import './App.css';

import {
  Board,
  Header,
  List
} from 'components';

const App : FC = () => {
  const [selected, setSelected] = useState('');
  
  const list = ['item1', 'item2'];
  
  return(
    <>
      <Header title="Golden thougts"/>
      <Board content={selected}/>
      <List list={list} selectHandler={setSelected}/>
    </>
  )

}

export default App;
