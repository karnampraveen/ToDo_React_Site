import logo from './logo.svg';
import './App.css';

// import for Navigation
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavBar';

// import the pages
import HomePage from './pages/HomePage';
import AddTask from './pages/AddTask';
import DisplayTasks from './pages/DisplayTasks';



function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AddTask" element={<AddTask />} />
          <Route path="/DispTasks" element={<DisplayTasks />} />
        </Routes>
      </BrowserRouter>      

    </div>
  );
}

export default App;
