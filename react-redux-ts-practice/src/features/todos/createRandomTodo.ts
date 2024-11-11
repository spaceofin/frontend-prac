const todos = [
  "Go for a run",
  "Read a book",
  "Finish the project",
  "Clean the room",
  "Practice coding",
  "Grocery shopping",
  "Write a blog post",
  "Watch a tutorial",
  "Plan a trip",
  "Cook a new recipe",
];

export const createRandomTodo = () => {
  const randomIndex = Math.floor(Math.random() * todos.length);
  return todos[randomIndex];
};
