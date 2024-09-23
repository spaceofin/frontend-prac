import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTodos, postTodo, deleteTodo, updateTodo } from 'api/json-api';
import { TodoType } from 'types';

export function usePrefetchTodos(currentPage: number): void {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery({
    queryKey: ['todos', currentPage + 1],
    queryFn: () => getTodos(currentPage + 1),
  });
}

export function useGetTodos(currentPage: number) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['todos', currentPage],
    queryFn: () => getTodos(currentPage),
  });

  return { data, isLoading, isError, error };
}

export function usePostTodo(
  newTodos: TodoType[],
  setNewTodos: React.Dispatch<React.SetStateAction<TodoType[]>>,
) {
  const queryClient = useQueryClient();
  const { mutate, isError, error, isPending, isSuccess, ...createMutation } = useMutation({
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
  return { mutate, isError, error, isPending, isSuccess, ...createMutation };
}

export function useUpdateTodo() {
  const queryClient = useQueryClient();
  const { mutate, isSuccess, ...updateMutation } = useMutation({
    mutationFn: ({ todoId, partialTodo }: { todoId: number; partialTodo: TodoType }) =>
      updateTodo(todoId, partialTodo),

    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] });

      console.log('updated data:', data);
    },
  });
  return { mutate, isSuccess, ...updateMutation };
}

export function useDeleteTodo() {
  const queryClient = useQueryClient();
  const { mutate, isSuccess, ...deleteMutation } = useMutation({
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
  return { mutate, isSuccess, ...deleteMutation };
}
