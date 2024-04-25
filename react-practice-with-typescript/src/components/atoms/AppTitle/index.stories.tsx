import type { Meta, StoryObj } from '@storybook/react';

import { AppTitle } from '.';

const meta: Meta<typeof AppTitle> = {
  title: 'Atoms/AppTitle',
  component: AppTitle,
};
export default meta;

type Story = StoryObj<typeof AppTitle>;

export const Default: Story = {
  args: {},
};