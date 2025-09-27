// src/App.jsx
import React from 'react';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-6">
      <ToDoList />
    </div>
  );
}

export default App;
