import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { RegisterBlogDialog } from '.';

const meta: Meta<typeof RegisterBlogDialog> = {
  title: 'Organisms/RegisterBlogDialog',
  component: RegisterBlogDialog,
};
export default meta;

type Story = StoryObj<typeof RegisterBlogDialog>;

export const Default: Story = {
  args: {
    onClose: fn(),
  },
};
