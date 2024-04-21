import type { Meta, StoryObj } from '@storybook/react';

import { ToDoItem } from '.';

const meta: Meta<typeof ToDoItem> = {
    title: 'Organisms/ToDoItem',
    component: ToDoItem,
};
export default meta;

type ToDoItem = StoryObj<typeof ToDoItem>;

export const Default: ToDoItem = {
    args: {
        label: 'Study',
    },
};
