
import { useState } from 'react'
import ToDo from './ToDo.jsx'
import NewToDo from './NewToDo.jsx';

let keyInd = 1;
function newKey() {
    const res = keyInd;
    keyInd++;
    return res;
}

// const initialList = [{text: "Count the bees", key: newKey()},
//   {text: "Change tablecloth", key: newKey()},
//   {text: "Wash beard", key: newKey()}];

const initialList = [];

function ToDoList() {
    const removeItemWithKey = key => setToDos(toDos.filter(box => (box.key != key)));
    const addToDo = (formData) => {
      const {text} = formData;
      setToDos([...toDos, {text, key: newKey()}]);
    }
    const [toDos, setToDos] = useState(initialList);
    return (
        <div data-testid="todolist">
          <h2> Checklist </h2>
          {toDos.map(({text, key}) => {
               return <ToDo text={text} key={key}
                            deleteFn={() => {removeItemWithKey(key)}}
                      />
          })}
          <hr/>
          <NewToDo AddFn={addToDo}/>
        </div>
    )
}

export default ToDoList;