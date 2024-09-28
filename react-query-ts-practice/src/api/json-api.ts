import { TodoType } from 'types';
import dayjs from 'dayjs';

export async function getTodos(pageNum?: number) {
  const url = pageNum
    ? `https://jsonplaceholder.typicode.com/todos?_page=${pageNum}`
    : `https://jsonplaceholder.typicode.com/todos`;

  const response = await fetch(url);
  return response.json();
}

export async function postTodo(newTodo: TodoType) {
  // 2s delay
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const url = `https://jsonplaceholder.typicode.com/todos`;

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
}

export async function deleteTodo(todoId: number) {
  // 2s delay
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;

  const response = await fetch(url, {
    method: 'DELETE',
  });
  return { response, todoId };
}

export async function updateTodo(todoId: number, partialTodo: TodoType) {
  const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;

  const response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(partialTodo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
}

function getRandomDate() {
  const year = Math.random() < 0.5 ? 2024 : 2025;
  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate;
}

export async function getDatedTodos() {
  const url = `https://jsonplaceholder.typicode.com/todos`;

  const response = await fetch(url);
  const todos = await response.json();

  const datedTodos = todos.map((todo: TodoType) => ({
    ...todo,
    date: dayjs(getRandomDate()).format('YYYY-MM-DD'),
  }));

  return { datedTodos };
}
