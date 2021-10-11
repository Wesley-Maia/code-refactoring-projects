import { useContext, keyboardEvent } from "react";
import MainContext from "../../Context/MainContext";
import * as C from './styles'

export function AddArea() {
  const { list, setList, inputText, setInputText} = useContext(MainContext);

  function handleChange({target}) {
    setInputText(target.value);
  }

  function handleKeyUp( {code} = keyboardEvent ){
    // console.log(code);
    if(code === 'Enter' && inputText !== '') {
      handleAddTask();
      setInputText('')
    }
  }

  function handleAddTask(){
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: inputText,
      done: false,
    });
    setList(newList);
  }

  return(
    <C.Container>
      <div className="plus">➕</div>
    
      <input
        type="text"
        placeholder="Adicione a tarefa"
        value={inputText}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
}