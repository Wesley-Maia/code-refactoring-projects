import React from 'react';
import MainProvider from './Context/MainProvider';
import * as C from './App.styles'
import { AddArea } from './components/AddArea';
import { ListItem } from './components/ListItem'


function App() {
  

  return (
    <MainProvider>
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

          <AddArea />
          <ListItem />

        </C.Area>
      </C.Container>
    </MainProvider>
  );
}

export default App;
