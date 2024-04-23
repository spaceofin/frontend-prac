import type { Meta, StoryObj } from '@storybook/react';

import { NotFound } from '.';

const meta: Meta<typeof NotFound> = {
  title: 'Pages/NotFound',
  component: NotFound,
};
export default meta;

type NotFound = StoryObj<typeof NotFound>;

export const Default: NotFound = {
  args: {},
};
