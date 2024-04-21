import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
`;

export const AppTitle = () => {
  return <Container to="/">To Do List</Container>;
};
