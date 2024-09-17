import { TodoType } from 'types';

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

// export async function deleteTodo(postId: number) {
//   // 2s delay
//   // await new Promise((resolve) => setTimeout(resolve, 2000));

//   const url = pageNum
//     ? `https://jsonplaceholder.typicode.com/todos?_page=${pageNum}`
//     : `https://jsonplaceholder.typicode.com/todos`;

//   const response = await fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(newTodo),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });
//   return response.json();
// }
