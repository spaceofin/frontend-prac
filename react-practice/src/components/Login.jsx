import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Spacer = styled.div`
  height: 40px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-contents: center;
`;

const ContentsContainer = styled.div`
  display: flex;
  min-width: 630px;
  min-height: 840px;
  padding: 20px;
  border: 5px solid #ff7a31;
  background-color: #ffbf7b;
  border-radius: 10px;
  margin: 10px;
`;

export const Login = () => {
  return (
    <Container>
      <Spacer />
      <ContentsWrapper>
        <ContentsContainer>Login Page</ContentsContainer>
      </ContentsWrapper>
    </Container>
  );
};
