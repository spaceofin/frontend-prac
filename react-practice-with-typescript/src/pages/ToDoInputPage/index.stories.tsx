import type { Meta, StoryObj } from '@storybook/react';

import { ToDoInputPage } from '.';

const meta: Meta<typeof ToDoInputPage> = {
  title: 'Pages/ToDoInputPage',
  component: ToDoInputPage,
};
export default meta;

type ToDoInputPage = StoryObj<typeof ToDoInputPage>;

export const Default: ToDoInputPage = {
  args: {},
};
