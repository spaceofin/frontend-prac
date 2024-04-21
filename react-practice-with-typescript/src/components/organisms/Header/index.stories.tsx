import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
};
export default meta;

type Header = StoryObj<typeof Header>;

export const Default: Header = {
  args: {},
};
