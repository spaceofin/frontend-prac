import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #398aff;
  padding: 50px;
  color: white;
  font-size: 20px;
`;

const App = () => {
  return <Container>Hello, React JS!</Container>;
};

export default App;
