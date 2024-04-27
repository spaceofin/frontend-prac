import type { Meta, StoryObj } from '@storybook/react';

import { BlogItem } from '.';

const meta: Meta<typeof BlogItem> = {
  title: 'Organisms/BlogItem',
  component: BlogItem,
};
export default meta;

type Story = StoryObj<typeof BlogItem>;

export const Default: Story = {
  args: {
    title: 'Blog Title',
    body: 'Blog Body',
  },
};
