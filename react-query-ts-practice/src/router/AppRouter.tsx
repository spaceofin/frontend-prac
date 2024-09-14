import { Routes, Route } from 'react-router-dom';
import { Todos } from 'components/Todos';
import { TanStackQueryRepo } from 'components/TanStackQueryRepo';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/tanstack-query-repo" element={<TanStackQueryRepo />} />
      </Routes>
    </>
  );
};
