import type { Meta, StoryObj } from '@storybook/react';

import { InputToDo } from '.';

const meta: Meta<typeof InputToDo> = {
  title: 'Organisms/InputToDo',
  component: InputToDo,
};
export default meta;

type InputToDo = StoryObj<typeof InputToDo>;

export const Default: InputToDo = {
  args: {},
};
