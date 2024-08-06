import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 20px;
  margin-top: 60px;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 630px;
  min-height: 840px;
  padding: 20px;
  border: 5px solid #ff7a31;
  background-color: #ffbf7b;
  border-radius: 10px;
  margin: 10px;
`;

export const SignUpPage = () => {
  return (
    <Container>
      <ContentsContainer>This is Sign Up Page</ContentsContainer>
    </Container>
  );
};
