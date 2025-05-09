import React, { useState } from "react";
import Task from "./Task"; // Import the Task component

function DayColumn({ day, tasks }) {
  const [taskList, setTaskList] = useState(tasks);
  const addTask = () => {
    const newTask = prompt("Enter a new task");
    if (newTask) {
      setTaskList([...taskList, newTask]);
    }
  };
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h2>{day}</h2> {/* The name of the day */}
      <ul>
        {taskList.map((task, index) => (
          <Task key={index} task={task} />
        ))}
        <button onClick={addTask}>Add Task</button>
      </ul>
    </div>
  );
}

export default DayColumn;
