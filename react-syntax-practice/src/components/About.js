import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #199656;
  padding: 50px;
  color: white;
  font-size: 20px;
`;

export const About = () => {
  console.log("About component");
  return <Container>This is About page.</Container>;
};
