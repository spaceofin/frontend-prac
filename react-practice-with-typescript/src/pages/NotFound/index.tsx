import styled from '@emotion/styled';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #eeeeee;
  font-size: 30px;
`;

export const NotFound = () => {
  return (
    <Container>
      404
      <br />
      NOT FOUND
    </Container>
  );
};