import type { Meta, StoryObj } from '@storybook/react';

import { BlogList } from '.';

const meta: Meta<typeof BlogList> = {
  title: 'Templates/BlogList',
  component: BlogList,
};
export default meta;

type Story = StoryObj<typeof BlogList>;

export const Default: Story = {
  args: {},
};

export const WithData: Story = {
  args: {
    posts: [
      { id: 1, title: 'blog title 1', body: 'blog body 1' },
      { id: 2, title: 'blog title 2', body: 'blog body 2' },
      { id: 3, title: 'blog title 3', body: 'blog body 3' },
    ],
  },
};
