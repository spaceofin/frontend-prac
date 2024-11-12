import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addTodo, removeTodo, selectTodo } from "./todosSlice";
import { createRandomTodo } from "./createRandomTodo";

export const Todos = () => {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector(selectTodo);

  const handleTodoAdd = (todo: string) => {
    if (todoList.includes(todo)) {
      console.log(`"${todo}" is already in the list.`);
      return;
    }
    // console.log(addTodo(todo));
    dispatch(addTodo(todo));
  };

  const handleTodoRemove = (todo: string) => {
    dispatch(removeTodo(todo));
  };

  return (
    <div className="flex flex-col items-center w-full h-80 bg-rose-300 font-mono relative">
      <div className="flex w-full justify-center text-4xl font-bold my-5">
        Todos
      </div>
      <button
        onClick={() => handleTodoAdd(createRandomTodo())}
        className="bg-gray-100 text-xl font-bold px-4 py-2 rounded-md">
        Add Todo
      </button>
      <ul className="w-1/2 mb-4 mt-6 h-36 overflow-y-auto">
        {todoList.length > 0 &&
          todoList.map((todo) => (
            <li key={todo} className="text-xl m-2">
              {todo}
              <button
                onClick={() => handleTodoRemove(todo)}
                className="bg-red-500 bg-opacity-90 px-4 mx-2 rounded-md">
                X
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
