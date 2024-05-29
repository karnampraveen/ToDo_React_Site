import { useState, useEffect } from "react";
import TaskData from '../data/TaskData.json'

export default function AddTask() {
    // states
    const [Task_Name, setTaskName] = useState('')
    const [Task_Description, setTaskDesc] = useState('')
    const [Task_Time, setTaskTime] = useState(0)
    const [Task_Priority, setTaskPriority] = useState('')


    //Efects

    // Other functions
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { Task_Name, Task_Description, Task_Time, Task_Priority }
        fetch('http://localhost:8000/Tasks',
            {
                method: 'POST',
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify(newTask)
            }
        )
        // TaskData = { ...TaskData, newTask }
        console.log(TaskData)
        alert("You have added your task!")
        setTaskName('')
        setTaskDesc('')
        setTaskTime(0)
        setTaskPriority('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Task Name: </label>
            <input type="text" required value={Task_Name} onChange={(e) => setTaskName(e.target.value)} />
            <br /><br /><br />
            <label>Task Description: </label>
            <input type="text" required value={Task_Description} onChange={(e) => setTaskDesc(e.target.value)} />
            <br /><br /><br />
            <label>Duration in Hours: </label>
            <input type="number" required value={Task_Time} onChange={(e) => setTaskTime(e.target.value)} />
            <br /><br /><br />
            <label>Task Priority: </label>
            <select required value={Task_Priority} onChange={(e) => setTaskPriority(e.target.value)}>
                <option value=""></option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <br /><br /><br />
            <button >Add Task</button>
        </form>
    );
}
