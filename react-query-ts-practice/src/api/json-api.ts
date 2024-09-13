import { TodoType } from 'types';

export async function getTodos() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  return response.json();
}

export async function postTodo(newTodo: TodoType) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
}
