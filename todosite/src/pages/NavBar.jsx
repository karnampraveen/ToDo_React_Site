import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav>
            <h1>To Do Site</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/AddTask">Add Task</Link></li>
                <li><Link to="/DispTasks">Display Tasks</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar
