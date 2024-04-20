import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '.';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
};
export default meta;

type Label = StoryObj<typeof Label>;

export const Default: Label = {
  args: { label: 'Study' },
};
