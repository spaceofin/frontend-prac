import type { Meta, StoryObj } from '@storybook/react';

import { Counter } from '.';

const meta: Meta<typeof Counter> = {
  title: 'Organisms/Counter',
  component: Counter,
};

export default meta;

type Counter = StoryObj<typeof Counter>;

export const Default: Counter = {
  args: {},
};
