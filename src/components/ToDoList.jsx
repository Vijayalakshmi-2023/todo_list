import React, { useState } from 'react';

const ToDoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    setTasks([...tasks, task.trim()]);
    setTask('');
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">To-Do List</h1>

      <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="flex-grow border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-lime-600 transition"
        >
          Add
        </button>
      </form>

      <ul className="space-y-3">
        {tasks.length === 0 ? (
          <li className="text-gray-500 text-center">No tasks yet</li>
        ) : (
          tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 rounded"
            >
              <span className="text-gray-800">{task}</span>
              <button
                onClick={() => handleDeleteTask(index)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ToDoList;
