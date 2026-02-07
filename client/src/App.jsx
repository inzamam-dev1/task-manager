import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '', status: 'Pending' });

  useEffect(() => { fetchTasks(); }, []);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/api/tasks');
    setTasks(res.data);
  };

  // Create Task 
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/tasks', formData);
    setFormData({ title: '', description: '', status: 'Pending' });
    fetchTasks();
  };

  // Update Status 
  const handleUpdateStatus = async (id, newStatus) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, { status: newStatus });
    fetchTasks();
  };

  // Delete Task 
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await axios.delete(`http://localhost:5000/api/tasks/${id}`);
        fetchTasks(); // Refresh the list after deleting
      } catch (error) {
        console.error("Delete failed:", error);
      }
    }
  };

 return (
  <div className="App">
    <header className="app-header">
      <div className="header-content">
        <h1>TaskCore <span className="version">v1.0</span></h1>
        <p className="subtitle">Internship Assessment | Full-Stack Suite</p>
      </div>
    </header>

    <main className="main-layout">
      {/* Creation Sidebar */}
      <aside className="sidebar">
        <div className="form-wrapper">
          <h3>Create New Task</h3>
          <form onSubmit={handleSubmit} className="task-form">
            <div className="input-group">
              <label>Task Title</label>
              <input 
                type="text" placeholder="e.g. API Integration" 
                value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}
                required 
              />
            </div>
            <div className="input-group">
              <label>Description</label>
              <textarea 
                placeholder="Detail the technical requirements..." 
                value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}
                required 
              />
            </div>
            <button type="submit" className="add-btn">Deploy Task</button>
          </form>
        </div>
      </aside>

      {/* Task Explorer */}
      <section className="task-explorer">
        <div className="explorer-header">
          <h2>Task Explorer</h2>
          <span className="count">{tasks.length} Active Tasks</span>
        </div>

        <div className="task-table-header">
          <span>Status</span>
          <span>Task Details</span>
          <span className="actions-header">Actions</span>
        </div>

        <div className="task-column">
          {tasks.length === 0 ? (
            <div className="empty-state">No tasks in current sprint.</div>
          ) : (
            tasks.map(task => (
              <div key={task._id} className="task-row">
                <div className="status-cell">
                  <span className={`dot ${task.status.toLowerCase().replace(' ', '-')}`}></span>
                  {task.status}
                </div>
                <div className="content-cell">
                  <h4>{task.title}</h4>
                  <p>{task.description}</p>
                </div>
                <div className="action-cell">
                  <select 
                    value={task.status} 
                    onChange={(e) => handleUpdateStatus(task._id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                  <button onClick={() => handleDelete(task._id)} className="delete-btn">Remove</button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  </div>
);
}
export default App;