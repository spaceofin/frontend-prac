import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { getTodos, postTodo } from 'api/my-api';
import { getTodos, postTodo } from 'api/json-api';
import { useState } from 'react';
import { TodoType } from 'types';

const maxPageNum = 20;

export function Todos() {
  const [inputValue, setInputValue] = useState<string>('');
  const [newTodos, setNewTodos] = useState<TodoType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Access the client
  const queryClient = useQueryClient();

  // Queries
  // const query = useQuery({ queryKey: ['todos'], queryFn: getTodos });
  const {
    data: todosData,
    isLoading: isLoadingTodos,
    isError: isErrorTodos,
    error: errorTodos,
  } = useQuery({ queryKey: ['todos', currentPage], queryFn: () => getTodos(currentPage) });

  // Mutations
  const {
    mutate,
    isError: isErrorPost,
    error: errorPost,
    isPending: isPendingPost,
  } = useMutation({
    mutationFn: ({ newTodo, pageNum }: { newTodo: TodoType; pageNum: number }) =>
      postTodo(newTodo, pageNum),

    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] });

      const newTodo = { ...data, id: newTodos.length + 200 + 1 };
      setNewTodos((prevTodos) => [...prevTodos, newTodo]);
      console.log('newTodo:', newTodo, 'posted successfully!');
    },
  });

  if (isLoadingTodos) {
    return <p>Loading todos...</p>;
  }

  if (isErrorTodos) {
    return (
      <>
        <p>Error occurred while fetching todos!</p>
        <p>{errorTodos.message}</p>
      </>
    );
  }

  if (isPendingPost) {
    return (
      <>
        <p>Submitting your post, please wait...</p>
      </>
    );
  }

  if (isErrorPost) {
    return (
      <>
        <p>Error occurred while posting todo!</p>
        <p>{errorPost.message}</p>
      </>
    );
  }

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todosData?.map((todo: TodoType) => <li key={todo.id}>{todo.title}</li>)}
        {/* {newTodos.map((todo: TodoType) => (
          <li key={todo.id}>{todo.title}</li>
        ))} */}
      </ul>

      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />

      <button
        onClick={() => {
          mutate({
            newTodo: {
              userId: Date.now(),
              id: 0,
              title: inputValue,
              completed: false,
            },
            pageNum: currentPage,
          });
        }}
      >
        Add Todo
      </button>
      <div style={{ display: 'flex', gap: '5px' }}>
        <button disabled={currentPage <= 1} onClick={() => setCurrentPage((prev) => prev - 1)}>
          prev
        </button>
        <span>{currentPage}</span>
        <button
          disabled={currentPage >= maxPageNum}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
}
