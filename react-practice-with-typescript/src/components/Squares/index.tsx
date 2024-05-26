import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 500px;
  margin: 20px;
  margin-bottom: 5px;
  padding: 15px;
  border-radius: 10px;
  border: 5px solid #666666;
  font-size: 25px;
  font-weight: bold;
`;

export const Squares = () => {
  return <Container>Squares</Container>;
};
