import type { Meta, StoryObj } from '@storybook/react';

import { PageTitle } from '.';

const meta: Meta<typeof PageTitle> = {
  title: 'Atoms/PageTitle',
  component: PageTitle,
};
export default meta;

type PageTitle = StoryObj<typeof PageTitle>;

export const Default: PageTitle = {
  args: { title: 'To Do List' },
};
