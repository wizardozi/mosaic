import React, { useState } from "react";

function Task({ task }) {
  const [isComplete, setIsComplete] = useState(false);
  const handleClick = () => {
    setIsComplete(!isComplete);
  };
  return (
    <div>
      <li
        onClick={handleClick}
        style={{
          textDecoration: isComplete ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task}
      </li>
    </div>
  );
}

export default Task;
