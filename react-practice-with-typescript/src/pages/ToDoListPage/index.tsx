import { ToDoList } from 'components/templates/ToDoList';


export const ToDoListPage = () => {
  const toDoList = ['Study', 'Laundry'];

  return <ToDoList toDoList={toDoList} />;
};
