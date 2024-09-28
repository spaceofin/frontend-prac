export type TodoType = {
  userId?: number;
  id?: number;
  title?: string;
  completed?: boolean;
};

export type DatedTodoType = {
  userId?: number;
  id?: number;
  title: string;
  completed?: boolean;
  date: string;
};
