import type { Meta, StoryObj } from '@storybook/react';

import { ToDoInput } from '.';

const meta: Meta<typeof ToDoInput> = {
  title: 'Templates/ToDoInput',
  component: ToDoInput,
};
export default meta;

type ToDoInput = StoryObj<typeof ToDoInput>;

export const Default: ToDoInput = {
  args: {
    ToDoInput: [],
  },
};