import React from "react";
import Task from "./Task"; // Import the Task component

function DayColumn({ day, tasks }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h2>{day}</h2> {/* The name of the day */}
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
        {/* <button>Add Task</button> */}
      </ul>
    </div>
  );
}

export default DayColumn;
