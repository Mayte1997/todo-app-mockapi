import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import AlertMessage from './components/AlertMessage';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// My mockapi url
const API_URL = 'https://6860c8068e7486408443f990.mockapi.io/api/v1/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [alert, setAlert] = useState('');
  
  // Fetches all tasks submitted
  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add tasks to Tasklist
  const addTask = async (task) => {
    const res = await axios.post(API_URL, task);
    setTasks([...tasks, res.data]);
    setAlert('Task added!');
  };
 // Deletes task from tasklist
  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTasks(tasks.filter(task => task.id !== id));
    setAlert('Task deleted.');
  };
// Updates an existing task
  const updateTask = async (updatedTask) => {
    const res = await axios.put(`${API_URL}/${updatedTask.id}`, updatedTask);
    setTasks(tasks.map(task => task.id === updatedTask.id ? res.data : task));
    setEditingTask(null);
    setAlert('Task updated!');
  };

  return (
    <Router>
      <Container className="my-4">
        <Header />
        <nav className="mb-4">
          <Link to="/" className="me-3">Home</Link>
          <Link to="/about" className="me-3">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {alert && <AlertMessage message={alert} />}
  
        <Routes>
          <Route
            path="/"
            element={
              <Home
                tasks={tasks}
                onAdd={addTask}
                onUpdate={updateTask}
                onDelete={deleteTask}
                editingTask={editingTask}
                setEditingTask={setEditingTask}
              />
            }
          /> {/* Routes to home page  */}
          <Route path="/about" element={<About />} /> {/* Routes to About page */}
          <Route path="/contact" element={<Contact />} /> {/* Routes to Contact page */}
        </Routes>

        <Footer />
      </Container>
    </Router>
  );
}

export default App;
