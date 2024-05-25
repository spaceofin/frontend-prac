import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 150px;
  margin: 20px;
  margin-bottom: 5px;
  padding: 15px;
  background-color: #f7d85e;
  border-radius: 10px;
`;

export const Counter = () => {
  return <Container>Counter</Container>;
};
