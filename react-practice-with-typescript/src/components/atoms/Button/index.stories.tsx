import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';
import { fn } from '@storybook/test';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Post',
    onClick: fn(),
  },
};