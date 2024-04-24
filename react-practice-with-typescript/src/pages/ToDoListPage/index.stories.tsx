import type { Meta, StoryObj } from '@storybook/react';
// import { ToDoListContextProvider } from 'contexts/ToDoList';

import { ToDoListPage } from '.';

const meta: Meta<typeof ToDoListPage> = {
  title: 'Pages/ToDoListPage',
  component: ToDoListPage,
};
export default meta;

type ToDoListPage = StoryObj<typeof ToDoListPage>

// export const Default: ToDoListPage = {
//   args: {},
// };

// export const Default = {
//   args: {},
// } as ToDoListPage;

export const Default: ToDoListPage = {
  args: {},
  // render: () => (
  //   <ToDoListContextProvider>
  //     <ToDoListPage />
  //   </ToDoListContextProvider>
  // ),
};