import type { Meta, StoryObj } from '@storybook/react';

import { AppTitle } from '.';

const meta: Meta<typeof AppTitle> = {
  title: 'Atoms/AppTitle',
  component: AppTitle,
  parameters: {
    backgrounds: {
      default: 'Header background color',
      values: [{ name: 'Header background color', value: '#4EAFFF' }],
    },
  },
};
export default meta;

type AppTitle = StoryObj<typeof AppTitle>;

export const Default: AppTitle = {
  args: {},
};
