import { useState } from 'react';
import { TodoType } from 'types';
import {
  useGetTodos,
  usePostTodo,
  useUpdateTodo,
  useDeleteTodo,
  usePrefetchTodos,
} from 'hooks/useTodos';

const maxPageNum = 20;

export function Todos() {
  const [inputValue, setInputValue] = useState<string>('');
  const [updateInputValue, setUpdateInputValue] = useState<string>('');
  const [newTodos, setNewTodos] = useState<TodoType[]>([]);
  const [updateId, setUpdateId] = useState<number>(0);
  const [targetTodo, setTargetTodo] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  usePrefetchTodos(currentPage);

  const {
    data: todosData,
    isLoading: isLoadingTodos,
    isError: isErrorTodos,
    error: errorTodos,
  } = useGetTodos(currentPage);

  const {
    mutate: mutatePost,
    isError: isErrorPost,
    error: errorPost,
    isPending: isPendingPost,
    isSuccess: isSuccessPost,
    ...createMutation
  } = usePostTodo(newTodos, setNewTodos);

  const { mutate: mutateUpdate, isSuccess: isSuccessUpdate, ...updateMutation } = useUpdateTodo();

  const { mutate: mutateDelete, isSuccess: isSuccessDelete, ...deleteMutation } = useDeleteTodo();

  if (isLoadingTodos) {
    return <p>Loading todos...</p>;
  }

  if (isErrorTodos) {
    return (
      <>
        <p>Error occurred while fetching todos!</p>
        <p>{errorTodos && errorTodos.message}</p>
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
        <p>{errorPost && errorPost.message}</p>
      </>
    );
  }

  const resetMutations = () => {
    createMutation.reset();
    updateMutation.reset();
    deleteMutation.reset();
  };

  const handleDelClick = (todoId: number) => {
    resetMutations();
    mutateDelete(todoId);
    setUpdateId(0);
  };

  const handleTodoClick = (todoId: number, targetTodo: string) => {
    resetMutations();
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
            resetMutations();
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
            resetMutations();
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
            resetMutations();
          }}
        >
          prev
        </button>
        <span>{currentPage}</span>
        <button
          disabled={currentPage >= maxPageNum}
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
            resetMutations();
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
