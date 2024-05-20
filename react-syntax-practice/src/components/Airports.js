import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #16a1cc;
  padding: 50px;
  color: white;
  font-size: 20px;
`;

export const Airports = () => {
  console.log("Airports component");
  return <Container>This is Airports page.</Container>;
};
