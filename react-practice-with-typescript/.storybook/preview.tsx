import type { Preview } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToDoListContextProvider } from '../src/contexts/ToDoList';


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: '^on.*' },
  },
  decorators: [
    (Story) => (
      <ToDoListContextProvider>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </ToDoListContextProvider>
    ),
  ],
};

export default preview;
