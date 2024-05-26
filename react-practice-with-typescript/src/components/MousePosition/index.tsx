import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 200px;
  margin: 20px;
  margin-bottom: 5px;
  padding: 15px;
  background-color: #eda7c9;
  border-radius: 10px;
  border: 5px solid #db7498;
  font-size: 25px;
  font-weight: bold;
`;

export const MousePosition = () => {
  console.log("MousePosition component called.");
  return <Container>MousePosition</Container>;
};
