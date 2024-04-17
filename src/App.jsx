import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import VoiceRecorder from "./components/VoiceRecorder";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [taskType, setTaskType] = useState("text");

  const handleAddTask = () => {
    if (input.trim() !== "" && taskType === "text") {
      setTasks([...tasks, { type: "text", content: input.trim() }]);
      setInput("");
    }
  };

  const handleRecordComplete = (audioData) => {
    setTasks([...tasks, { type: "voice", content: audioData }]);
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
        {taskType === "text" && (
          <>
            <input type="text" className="input input-bordered w-full" placeholder="Add a new task" value={input} onChange={handleInputChange} onKeyPress={handleKeyPress} />
            <button className="btn btn-primary" onClick={handleAddTask}>
              Add
            </button>
          </>
        )}
        {taskType === "voice" && <VoiceRecorder onRecordComplete={handleRecordComplete} />}
      </div>
      <ul className="menu bg-base-100 w-full p-2 rounded-box">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{task.type === "text" ? task.content : "Voice Note"}</span>
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
