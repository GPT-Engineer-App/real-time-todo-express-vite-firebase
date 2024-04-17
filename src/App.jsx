import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input.trim()]);
      setInput("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <input type="text" className="input input-bordered w-full" placeholder="Add a new task" value={input} onChange={handleInputChange} onKeyPress={handleKeyPress} />
        <button className="btn btn-primary" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <ul className="menu bg-base-100 w-full p-2 rounded-box">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{task}</span>
            <button className="btn btn-ghost btn-circle" onClick={() => handleDeleteTask(index)}>
              <FaTrashAlt />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
