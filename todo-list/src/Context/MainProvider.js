import React, { useState } from 'react';
import MainContext from './MainContext';

function MainProvider({ children }) {

  const [list, setList] = useState([]);
  const [inputText, setInputText] = useState('');

  const contextValue = {
    list,
    setList,
    inputText,
    setInputText,
  };

  return (
    <MainContext.Provider value={ contextValue }>
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;