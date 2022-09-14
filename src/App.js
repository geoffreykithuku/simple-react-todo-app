import React, {useState, useRef} from 'react'

import './App.css'

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setcurrentTask] = useState("");

  const inputTask = useRef(null);

  const handleClick = () => {

    setTodoList([...todoList, currentTask]);
    inputTask.current.value = "";
  }

  let no = 0;
  const deleteTask = (taskToDelete) => {
    setTodoList(
      todoList.filter((task) => {
        return task !== taskToDelete;
      })
    )
  }



  return (
    <div className='App'>
      <h1>To-Do List</h1>
      <div>
        <input ref={inputTask} type="text" placeholder="Enter task" onChange={(event) => {
          setcurrentTask(event.target.value);
        }} />

        <button className='button' onClick={handleClick}>Add Task</button>
      </div>
      <hr />
      <ul>
        {todoList.map((val, key) => {
          no = no + 1;
         
         
          return(
          <div id='tasks'>
            <li key={key}>{no}. {val}</li>
            <button id='btn' onClick={()=>deleteTask(val)}>x</button>
          </div>)
        })}
      </ul>

    </div>
  )
}

export default App