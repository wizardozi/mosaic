import React, { useState } from "react";
import Task from "./Task";
import AddTaskModal from "./AddTaskModal";

function TaskList({ category, tasks, onAddTask }) {
  const [taskList, setTaskList] = useState(tasks);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddTask = (taskData) => {
    setTaskList([...taskList, taskData.taskName]);
    if (onAddTask) {
      onAddTask(taskData);
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h2 style={styles.title}>{category}</h2>
        <button style={styles.addButton} onClick={() => setModalOpen(true)}>
          +
        </button>
      </div>
      <ul style={styles.taskList}>
        {taskList.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </ul>
      <AddTaskModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        onSubmit={handleAddTask}
      />
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    padding: "15px",
    margin: "10px",
    width: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  title: {
    fontSize: "1.2em",
    margin: 0,
    color: "#4a4a4a",
  },
  addButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    fontSize: "1.2em",
    cursor: "pointer",
  },
  taskList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
};

export default TaskList;
