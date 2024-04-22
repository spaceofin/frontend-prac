import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { PageTitle } from 'components/atoms/PageTitle';
import { InputToDo } from 'components/organisms/InputToDo';
import { Button } from 'components/atoms/Button';


const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #dffd97;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 70px;
  bottom: 50px;
  z-index: 1;
`;

export const ToDoInput = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Contents>
        <PageTitle title="Add To Do" />
        <InputToDo />
      </Contents>
      <ButtonContainer>
        <Button label="Close" color="#0ba3ba" onClick={() => navigate('/')} />
      </ButtonContainer>
    </Container>
  );
};
