import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addTodo,
  removeTodo,
  selectTodo,
  addDone,
  selectDone,
} from "./todosSlice";
import { createRandomTodo } from "./createRandomTodo";

export const Todos = () => {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector(selectTodo);
  const doneList = useAppSelector(selectDone);

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

  const handleTodoDone = (todo: string) => {
    dispatch(removeTodo(todo));
    dispatch(addDone(todo));
  };

  return (
    <div className="flex flex-col items-center w-full h-96 bg-rose-300 font-mono relative">
      <div className="flex w-full justify-center text-4xl font-bold my-5">
        Todos
      </div>
      <div className="grid grid-cols-2 px-6 gap-4 w-full">
        <div>
          <button
            onClick={() => handleTodoAdd(createRandomTodo())}
            className="bg-gray-100 text-xl font-bold px-4 py-2 rounded-md h-10 flex items-center">
            Add Todo
          </button>
          <ul className="h-48 my-3 rounded-md overflow-y-auto bg-gray-100 text-md">
            {todoList.length > 0 &&
              todoList.map((todo) => (
                <li key={todo} className="mx-2 my-1">
                  {todo}
                  <button
                    onClick={() => handleTodoRemove(todo)}
                    className="bg-red-500 bg-opacity-90 px-2 ml-2 rounded-md">
                    X
                  </button>
                  <button
                    onClick={() => handleTodoDone(todo)}
                    className="bg-green-500 bg-opacity-90 px-2 ml-1 rounded-md">
                    O
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <label className="text-xl font-bold px-4 py-2 leading-10">Done</label>
          <ul className="w-full h-48 my-3 rounded-md overflow-y-auto bg-gray-100 text-md">
            {doneList.map((done) => (
              <li key={done} className="mx-2 my-1">
                {done}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
