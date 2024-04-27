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
