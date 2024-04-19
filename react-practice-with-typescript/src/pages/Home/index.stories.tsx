import type { Meta, StoryObj } from '@storybook/react';

import { Home } from '.';

const meta: Meta<typeof Home> = {
    title: 'Pages/Home',
    component: Home,
};

export default meta;

type Home = StoryObj<typeof Home>;

export const Default: Home = {
    args: {},
};
