import React, { MouseEvent } from 'react';
import "../styles/toDoList.css";
interface Props {
id:string
Alltask: string[]
setAllTask: React.Dispatch<React.SetStateAction<string[]>>
}
const DeleteTask: React.FC<Props> = ({id,Alltask,setAllTask}) => {
    const DeleteTask = (e: MouseEvent<HTMLButtonElement>):void => {
        setAllTask(Alltask.filter((task)=>{
          return task !=e.currentTarget.id
        }))
    }

    return (
        <button id={id} onClick={DeleteTask} className="delete-task-button">Delete Task</button>
    );
}

export default DeleteTask;