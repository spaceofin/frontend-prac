import { Routes, Route } from 'react-router-dom';
import { Todos, TanStackQueryRepo, Comments } from 'components';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/tanstack-query-repo" element={<TanStackQueryRepo />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </>
  );
};