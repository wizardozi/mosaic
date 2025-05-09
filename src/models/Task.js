export class Task {
  constructor(
    id,
    title,
    category,
    difficulty,
    dueDate,
    notes,
    todo = false,
    completed = false
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.difficulty = difficulty;
    this.dueDate = dueDate;
    this.notes = notes;
    this.todo = todo;
    this.completed = completed;
  }
}
