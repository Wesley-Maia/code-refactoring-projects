import { useContext } from "react";
import MainContext from "../../Context/MainContext";
import * as C from './styles';

export function ListItem({item}) {

  const { list, setList } = useContext(MainContext);

  function handleTaskChange(id, done) {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }
  
  return(
    <div>
      {list.map((item, index) => (
        <C.Container key={index} done={item.done}>
          <input 
            type="checkbox"
            checked={item.done}
            onChange={(e)=>handleTaskChange(item.id, e.target.checked)}
          />
          <label>{item.name} - {item.done.toString()}</label>
        </C.Container>
      ))}
    </div>
  );
}
