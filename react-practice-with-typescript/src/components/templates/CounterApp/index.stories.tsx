import type { Meta, StoryObj } from '@storybook/react';

import { CounterApp } from '.';

const meta: Meta<typeof CounterApp> = {
    title: 'Templates/CounterApp',
    component: CounterApp,
};

export default meta;

type CounterApp = StoryObj<typeof CounterApp>;

export const Default: CounterApp = {
    args: {},
};
