import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '.';

const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    component: Button,

};
export default meta;

type Button = StoryObj<typeof Button>;

export const Default: Button = {
    args: {
        label: 'Button',
        onClick: fn(),
    },
};

export const RedAddButton: Button = {
    args: {
        ...Default.args,
        label: 'Add',
        color: '#f72b2b',
    },
};

export const BlueAddButton: Button = {
    args: {
        ...Default.args,
        label: 'Add',
        color: '#285ded',
    },
};

