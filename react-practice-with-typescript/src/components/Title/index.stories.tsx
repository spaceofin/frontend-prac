import type { Meta, StoryObj } from '@storybook/react';

import { Title } from '.';

// const meta: Meta<typeof Title> = {
//   title: 'Atoms/Title',
//   component: Title,
// };

const meta = {
  title: 'Atoms/Title',
  component: Title,
} as Meta<typeof Title>;

export default meta;
type Title = StoryObj<typeof Title>;

export const Default: Title = {
  render: () => <Title />,
};
