import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #ff9c00;
  padding: 50px;
  color: white;
  font-size: 20px;
`;

export const Home = () => {
  console.log("Home component");
  return <Container>This is Home page.</Container>;
};
