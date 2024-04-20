import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Input } from '.';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
};
export default meta;

type Input = StoryObj<typeof Input>;

export const Default: Input = {
  args: {
    value: 'Study',
    onChange: fn(),
  },
};
