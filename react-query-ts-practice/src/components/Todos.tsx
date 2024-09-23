import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { getTodos, postTodo } from 'api/my-api';
import { getTodos, postTodo, deleteTodo, updateTodo } from 'api/json-api';
import { useState } from 'react';
import { TodoType } from 'types';

const maxPageNum = 20;

export function Todos() {
  const [inputValue, setInputValue] = useState<string>('');
  const [updateInputValue, setUpdateInputValue] = useState<string>('');
  const [newTodos, setNewTodos] = useState<TodoType[]>([]);
  const [updateId, setUpdateId] = useState<number>(0);
  const [targetTodo, setTargetTodo] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Access the client
  const queryClient = useQueryClient();

  if (currentPage < maxPageNum) {
    queryClient.prefetchQuery({
      queryKey: ['todos', currentPage + 1],
      queryFn: () => getTodos(currentPage + 1),
    });
  }

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
    mutate: mutatePost,
    isError: isErrorPost,
    error: errorPost,
    isPending: isPendingPost,
    isSuccess: isSuccessPost,
    ...createMutation
  } = useMutation({
    mutationFn: (newTodo: TodoType) => postTodo(newTodo),

    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] });

      console.log('data:', data);

      const newTodo = { ...data, id: newTodos.length + 200 + 1 };
      setNewTodos((prevTodos) => [...prevTodos, newTodo]);
      console.log('newTodo:', newTodo, 'posted successfully!');
    },
  });

  const {
    mutate: mutateDelete,
    isSuccess: isSuccessDelete,
    ...deleteMutation
  } = useMutation({
    mutationFn: (todoId: number) => deleteTodo(todoId),

    onSuccess: ({ response, todoId }) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] });

      if (response.ok) {
        console.log('delete response:', response);

        console.log('todo ID', todoId, 'deleted successfully!');
      } else {
        console.log('failed to delete todo');
      }
    },
  });

  const {
    mutate: mutateUpdate,
    isSuccess: isSuccessUpdate,
    ...updateMutation
  } = useMutation({
    mutationFn: ({ todoId, partialTodo }: { todoId: number; partialTodo: TodoType }) =>
      updateTodo(todoId, partialTodo),

    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] });

      console.log('updated data:', data);
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

  const handleDelClick = (todoId: number) => {
    createMutation.reset();
    updateMutation.reset();
    deleteMutation.reset();
    mutateDelete(todoId);
    setUpdateId(0);
  };

  const handleTodoClick = (todoId: number, targetTodo: string) => {
    createMutation.reset();
    updateMutation.reset();
    deleteMutation.reset();
    setUpdateId(todoId);
    setTargetTodo(targetTodo);
  };

  return (
    <div>
      <h1>Todos</h1>
      <h3>Click a Todo to update it</h3>
      <ul>
        {todosData?.map((todo: TodoType) => (
          <div key={todo.id} style={{ display: 'flex' }}>
            <li
              style={{ cursor: 'pointer' }}
              onClick={() => handleTodoClick(todo.id as number, todo.title as string)}
            >
              {todo.title}
            </li>
            <button onClick={() => handleDelClick(todo.id as number)} style={{ marginLeft: '5px' }}>
              DEL
            </button>
          </div>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button
          onClick={() => {
            createMutation.reset();
            deleteMutation.reset();
            updateMutation.reset();
            if (inputValue) {
              mutatePost({
                userId: Date.now(),
                id: 0,
                title: inputValue,
                completed: false,
              });
              setInputValue('');
            } else {
              alert('Enter a value.');
            }
          }}
        >
          Add Todo
        </button>

        {isSuccessPost && (
          <span style={{ color: 'blue', marginLeft: '10px' }}>New Todo Added Successfully!</span>
        )}
        {isSuccessDelete && (
          <span style={{ color: 'red', marginLeft: '10px' }}>Todo Deleted Successfully!</span>
        )}
      </div>

      <div>
        <input
          type="text"
          value={updateInputValue}
          onChange={(event) => {
            setUpdateInputValue(event.target.value);
          }}
        />

        <button
          disabled={updateId === 0}
          onClick={() => {
            createMutation.reset();
            deleteMutation.reset();
            updateMutation.reset();
            if (updateInputValue) {
              mutateUpdate({
                todoId: updateId,
                partialTodo: { title: updateInputValue },
              });
              setUpdateInputValue('');
              setUpdateId(0);
            } else {
              alert('Enter a value.');
            }
          }}
        >
          Update Todo
        </button>
        {updateId !== 0 && (
          <span style={{ marginLeft: '10px', color: 'orange' }}>Target Todo: {targetTodo}</span>
        )}
        {isSuccessUpdate && (
          <span style={{ color: 'green', marginLeft: '10px' }}>Todo Updated Successfully!</span>
        )}
      </div>

      <div style={{ display: 'flex', gap: '5px' }}>
        <button
          disabled={currentPage <= 1}
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
            createMutation.reset();
            deleteMutation.reset();
            updateMutation.reset();
          }}
        >
          prev
        </button>
        <span>{currentPage}</span>
        <button
          disabled={currentPage >= maxPageNum}
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
            createMutation.reset();
            deleteMutation.reset();
            updateMutation.reset();
          }}
        >
          next
        </button>
      </div>

      <h3>New Todo List</h3>
      <ul>
        {newTodos.map((todo: TodoType) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
