import type { Meta, StoryObj } from '@storybook/react';

import { BlogBody } from '.';

const meta: Meta<typeof BlogBody> = {
  title: 'Atoms/BlogBody',
  component: BlogBody,
};
export default meta;

type Story = StoryObj<typeof BlogBody>;

export const Default: Story = {
  args: {
    body: 'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus'
  },
};