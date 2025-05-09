import React, { useState } from "react";
import Task from "./Task";
import AddTaskModal from "./AddTaskModal";

// Initial categories and tasks
const initialCategories = {
  Work: ["Write documentation", "Client call", "Bug fixes"],
  Personal: ["Meeting at 10AM", "Send emails", "Review PRs"],
  Recurring: ["Daily standup", "Weekly report"],
};

function TasksCard() {
  // State: categories object, modal open, and selected category
  const [categories, setCategories] = useState(initialCategories);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Open modal for a specific category
  const handleOpenModal = (category) => {
    setSelectedCategory(category);
    setModalOpen(true);
  };

  // Add a new task to the selected category
  const handleAddTask = (taskText) => {
    if (!taskText || !selectedCategory) return;
    setCategories((prev) => ({
      ...prev,
      [selectedCategory]: [...prev[selectedCategory], taskText],
    }));
    setModalOpen(false);
    setSelectedCategory(null);
  };

  // Add a new category
  const handleAddCategory = () => {
    const newCategory = prompt("Enter a new Category");
    if (
      newCategory &&
      newCategory.trim() &&
      !categories.hasOwnProperty(newCategory)
    ) {
      setCategories({
        ...categories,
        [newCategory]: [],
      });
    }
  };

  return (
    <div style={styles.card}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          style={styles.addButton}
          onClick={() => handleOpenModal()}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#444")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#666")}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
          >
            <circle cx="15" cy="15" r="14" fill="white" />
            <line
              x1="15"
              y1="8.5"
              x2="15"
              y2="21.5"
              stroke="#666"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="8.5"
              y1="15"
              x2="21.5"
              y2="15"
              stroke="#666"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <h1 style={{ margin: 0 }}>Tasks</h1>
      </div>
      <div>
        {Object.entries(categories).map(([category, tasks]) => (
          <div key={category} style={{ marginBottom: "18px" }}>
            <div style={styles.categoryHeader}>
              <h2 style={styles.title}>{category}</h2>
            </div>
            <ul style={styles.taskList}>
              {tasks.length === 0 ? (
                <li
                  style={{
                    color: "#aaa",
                    fontStyle: "italic",
                    padding: "6px 0",
                  }}
                >
                  No tasks
                </li>
              ) : (
                tasks.map((task, idx) => <Task key={idx} task={task} />)
              )}
            </ul>
          </div>
        ))}
      </div>
      <AddTaskModal
        isOpen={modalOpen}
        onRequestClose={() => {
          setModalOpen(false);
          setSelectedCategory(null);
        }}
        onSubmit={handleAddTask}
        category={selectedCategory}
      />
    </div>
  );
}

export default TasksCard;

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
  categoryHeader: {
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
    backgroundColor: "#fff",
    color: "#666",
    border: "2px solid #666",
    borderRadius: "50%",
    width: "22px",
    height: "22px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    padding: "0",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "8px",
    transition: "border-color 0.15s",
  },
  taskList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
};
