import { FC, useState } from 'react';
import './App.css';

import {
  Board,
  Header,
  List
} from 'components';

const App : FC = () => {
  const [selected, setSelected] = useState('');
  
  const list = [
    'To, że milczę, nie znaczy, że nie mam nic do powiedzenia.',
    'Lepiej zaliczać się do niektórych, niż do wszystkich.',
    'Czytanie książek to najpiękniejsza zabawa, jaką sobie ludzkość wymyśliła',
    'Czytanie książek to najpiękniejsza zabawa, jaką sobie ludzkość wymyśliła'
  ];
  
  return(
    <>
      <Header title="Golden thougts"/>
      <Board content={selected}/>
      <List list={list} selectHandler={setSelected}/>
    </>
  )

}

export default App;
