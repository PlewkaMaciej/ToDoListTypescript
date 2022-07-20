import React, { useRef, useState } from "react"
import "../styles/toDoList.css";
interface Props {
    newTask: string  
    setAllTask: React.Dispatch<React.SetStateAction<string[]>>
    Alltask: string[]
inputRef:React.RefObject<HTMLInputElement|null>
}
const AddNewTask: React.FC<Props> = ({ setAllTask, newTask, Alltask ,inputRef}) => {
    const addTaskToList = ():void => {
        setAllTask(prevAlltask => [...prevAlltask, newTask])
        if (inputRef && inputRef.current) {
            inputRef.current.value=""
       }
    }

    return (
        <button onClick={addTaskToList} className="add-task-button">Add</button>
    );
}

export default AddNewTask;