import React, { useRef, useState } from "react"
import "../styles/toDoList.css";
interface Props {
    newTask: string  
    setAllTask: React.Dispatch<React.SetStateAction<string[]>>
    Alltask: string[]

}
const AddNewTask: React.FC<Props> = ({ setAllTask, newTask, Alltask }) => {
    const addTaskToList = () => {
        setAllTask(prevAlltask => [...prevAlltask, newTask])

    }

    return (
        <button onClick={addTaskToList} className="add-task-button">Add</button>
    );
}

export default AddNewTask;