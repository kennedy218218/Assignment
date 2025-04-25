import React, { useState } from 'react';
import './App.css';

function ToDoList() {
  const [tasks, setTasks] = useState([
    'Respond to important emails',
    'Make Lunch',
    'Go Swimming',
    'Work on React project',
    'Review calendar for upcoming events',
    ' Plan weekend activity'
    
  ]);
 const [checked, setChecked] = useState(Array(tasks.length).fill(false));
  const [newTask, setNewTask] = useState('');

  const toggleCheckbox = (index) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask]);
    setChecked([...checked, false]);
    setNewTask('');
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    const updatedChecked = checked.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setChecked(updatedChecked);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={checked[index] ? 'completed' : ''}
          >
            <label>
              <input
                type="checkbox"
                checked={checked[index]}
                onChange={() => toggleCheckbox(index)}
              />
              <span>{task}</span>
            </label>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;




