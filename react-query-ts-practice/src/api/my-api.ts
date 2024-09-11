const todos = [
  { id: 1, title: 'Learn React' },
  { id: 2, title: 'Learn TypeScript' },
  { id: 3, title: 'Build a Project' },
  { id: 4, title: 'Read a Book' },
  { id: 5, title: 'Exercise' },
  { id: 6, title: 'Cook Dinner' },
  { id: 7, title: 'Clean the House' },
  { id: 8, title: 'Write a Blog Post' },
  { id: 9, title: 'Learn GraphQL' },
  { id: 10, title: 'Watch a Movie' },
];

export async function getTodos() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return todos;
}

export async function postTodo(newTodo: { id: number; title: string }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  todos.push(newTodo);

  return newTodo;
}
