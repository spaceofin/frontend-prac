import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #830fff;
  padding: 50px;
  color: white;
  font-size: 20px;
`;

export const EventDetail = () => {
  const location = useLocation();
  console.log(location);

  return <Container>This is {location.state.title} Detail Page.</Container>;
};
