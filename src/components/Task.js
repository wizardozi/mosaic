import React from "react";
import { Task } from "../models/Task";

function Task({ task }) {
  return (
    <div>
      <li>{task.title}</li>
    </div>
  );
}

export default Task;
