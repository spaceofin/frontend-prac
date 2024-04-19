import type { Meta, StoryObj } from '@storybook/react';

import { Count } from '.';

const meta: Meta<typeof Count> = {
  title: 'Atoms/Count',
  component: Count,
};

export default meta;

type Count = StoryObj<typeof Count>;

export const Default: Count = {
  args: {
    value: 0,
  },
};
