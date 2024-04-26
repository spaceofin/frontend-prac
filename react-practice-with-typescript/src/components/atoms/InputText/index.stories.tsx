import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { InputText } from '.';

const meta: Meta<typeof InputText> = {
  title: 'Atoms/InputText',
  component: InputText,
};
export default meta;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {
  args: {
    value: 'default input value',
    onChange: fn(),
  },
};