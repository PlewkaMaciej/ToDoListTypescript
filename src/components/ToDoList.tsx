import React, { useRef, useState } from "react"
import "../styles/toDoList.css";
import AddNewTask from './AddNewTask';
interface Props{

}
const ToDoList: React.FC<Props>= ({})=> {
    const [Alltask, setAllTask] = useState<Array<string>>([])
    const [newTask, setNewTask] = useState<string>("")
    const inputRef=useRef<HTMLInputElement>(null)
    const handleChange=(e: React.FormEvent<HTMLInputElement>)=>{
       setNewTask(e.currentTarget.value)
    }
  return (
    <div className="main-container">
        <div className="input-and-button-container">
      <input className="input" type="text" ref={inputRef} onChange={handleChange} placeholder="Your new task..."  />
      <AddNewTask newTask={newTask}  Alltask={Alltask} setAllTask={setAllTask}/>
      </div>
      <div className="task-container">
    {Alltask.map((value)=>{
     return <p>{value}</p>
    })}
      </div>
    </div>
  );
}

export default ToDoList;