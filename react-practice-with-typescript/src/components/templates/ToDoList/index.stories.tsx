import type { Meta, StoryObj } from '@storybook/react';

import { ToDoList } from '.';

const meta: Meta<typeof ToDoList> = {
  title: 'Templates/ToDoList',
  component: ToDoList,
};
export default meta;

type ToDoList = StoryObj<typeof ToDoList>;

export const Default: ToDoList = {
  args: {
    toDoList: [],
  },
};

export const WithToDoList: ToDoList = {
  args: {
    toDoList: ['Study', 'Laundry'],
  },
};