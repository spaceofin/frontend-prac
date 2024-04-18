import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  title: 'Atoms/Button',
  component: Button,
} as Meta<typeof Button>;

export default meta;
type Button = StoryObj<typeof Button>;

export const Default: Button = {
  args: {
    label: 'Button',
  },
};
