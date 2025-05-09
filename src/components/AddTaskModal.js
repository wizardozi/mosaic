import React, { useState } from "react";
import Modal from "react-modal";
import { Task } from "../models/Task";

Modal.setAppElement("#root");

function AddTaskModal({
  isOpen,
  onRequestClose,
  onAddTask,
  existingCategories,
}) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [newCategory, setNewCategory] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use the new category if it was entered
    const finalCategory = newCategory
      ? category
      : existingCategories.includes(category)
      ? category
      : "Uncategorized";

    const newTask = new Task(
      Date.now(),
      title,
      finalCategory,
      dueDate,
      difficulty
    );
    onAddTask(newTask);

    if (newCategory && !existingCategories.includes(category)) {
      existingCategories.push(category);
    }

    // Reset Fields
    setTitle("");
    setCategory("");
    setDueDate("");
    setDifficulty("");
    setNewCategory(false);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Task"
    >
      <h2>Add a New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "new") {
              setNewCategory(true);
              setCategory("");
            } else {
              setNewCategory(false);
              setCategory(value);
            }
          }}
        >
          <option value="" disabled>
            Select Category
          </option>
          {existingCategories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
          <option value="new">+ Create New Category</option>
        </select>

        {newCategory && (
          <input
            type="text"
            placeholder="New Category Name"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        )}

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="" disabled>
            Select Difficulty
          </option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <button type="submit">Add Task</button>
      </form>
    </Modal>
  );
}

export default AddTaskModal;
