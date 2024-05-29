import { useEffect, useState } from 'react'
import TaskData from '../data/TaskData.json'

const DisplayTasks = () => {
// const 
    // const [task, setTask] = useState('')

    // const [Task_Name, setTaskName] = useState('')
    // const [Task_Description, setTaskDesc] = useState('')
    // const [Task_Time, setTaskTime] = useState(0)
    // const [Task_Priority, setTaskPriority] = useState('')
    const [tasks, setTasks] = useState([tasks]);

    useEffect(() => {
        fetch('http://localhost:8000/Tasks')
            .then((response) => response.json())
            // .then((data)=> setTaskName(data.message))
            // .then((data)=> setTaskDesc(data.message))
            // .then((data)=> setTaskTime(data.message))
            // .then((data)=> setTaskPriority(data.message))
            .then((data) => setTasks(data.message))
            console.log(tasks)
    }, [])

    return (
        <div>
        <h1 className='header'>Tasks</h1>


{tasks && tasks?.map((task) =>(
    <div key={task.id}>
    <p>{task.Task_Name}</p>
    <p>{task.Task_Description}</p>
    <p>{task.Task_Time}</p>
    <p>{task.Task_Priority}</p>
    </div>
))}


        </div>         
    );
}

export default DisplayTasks

            {/* {TaskData.map((Task)=>(
                <div>
                <h1 className='header'>{Task.Task_Name}</h1>
                <h5 className='header'>{Task.Task_description}</h5>
                <h3 className='header'>{Task.Task_Time}</h3>
                <h5 className='header'>{Task.Task_Priority}</h5>
                </div>
            ))} */}


{/* <p>{Task_Name}</p>
<p>{Task_Description}</p>
<p>{Task_Time}</p>
<p>{Task_Priority}</p> */}