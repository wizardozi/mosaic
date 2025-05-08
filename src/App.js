import React from "react";
import DayColumn from "./components/DayColumn";

function App() {
  const mondayTasks = ["Meeting at 10AM", "Send emails", "Review PRs"];
  const tuesdayTasks = ["Write documentation", "Client call", "Bug fixes"];

  return (
    <div>
      <h1>Mosaic Planner</h1>
      <DayColumn day="Monday" tasks={mondayTasks} />
      <DayColumn day="Tuesday" tasks={tuesdayTasks} />
    </div>
  );
}

export default App;
