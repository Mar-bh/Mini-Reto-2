import React, { useState, useEffect } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      setTasks(storedTasks);
      //console.log('Loaded tasks from local storage:', storedTasks);
    } catch (error) {
      console.error('Error loading tasks from local storage:', error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      //console.log('Saved tasks to local storage:', tasks);
    } catch (error) {
      console.error('Error saving tasks to local storage:', error);
    }
  }, [tasks]);


  const handleAddTask = (event) => {
    event.preventDefault();
    const newTask = event.target.elements.taskInput.value.trim();
    if (newTask) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      event.target.elements.taskInput.value = '';
    }
  };

  const handleToggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleRemoveCompleted = () => {
    const newTasks = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
  };

  return (
    <div className = "main">
      <div className = "fatherContainer">
        <div className = "Title">
              <h1>To Do List</h1>
        </div>
      <div className = "ThemeWindow">
          <div className="container">
            <div className = "Options">
              <form onSubmit={handleAddTask}>
                <input type="text" name="taskInput" />
                <button  type="submit">Add Task</button>
              </form>
            </div>
            <ul>
              {tasks.map((task, index) => (
                <li
                  key={index}
                  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                  onClick={() => handleToggleComplete(index)}
                >
                  {task.text}
                </li>
              ))}
            </ul>
            <button onClick={handleRemoveCompleted}>Remove Completed Tasks</button>
         </div>
        </div>
      </div>  
     </div>    

  );
}

export default ToDoList;
