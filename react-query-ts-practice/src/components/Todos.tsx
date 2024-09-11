import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTodos, postTodo } from 'api/my-api';
import { useState } from 'react';

export function Todos() {
  const [inputValue, setInputValue] = useState<string>('');

  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery({ queryKey: ['todos'], queryFn: getTodos });

  // Mutations
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return (
    <div>
      <ul>{query.data?.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul>

      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: inputValue,
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
