import type { Meta, StoryObj } from '@storybook/react';

import { DialogTitle } from '.';

const meta: Meta<typeof DialogTitle> = {
  title: 'Atoms/DialogTitle',
  component: DialogTitle,
};
export default meta;

type Story = StoryObj<typeof DialogTitle>;

export const Default: Story = {
  args: {
    title: 'Add Blog Post'
  },
};