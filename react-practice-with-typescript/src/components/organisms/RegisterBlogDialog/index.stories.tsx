import type { Meta, StoryObj } from '@storybook/react';

import { RegisterBlogDialog } from '.';

const meta: Meta<typeof RegisterBlogDialog> = {
  title: 'Organisms/RegisterBlogDialog',
  component: RegisterBlogDialog,
};
export default meta;

type Story = StoryObj<typeof RegisterBlogDialog>;

export const Default: Story = {
  args: {
    title: 'Blog Title',
    body: 'Blog Body',
  },
};
