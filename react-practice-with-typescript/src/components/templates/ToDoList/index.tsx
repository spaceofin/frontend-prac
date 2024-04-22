import styled from '@emotion/styled';
import { PageTitle } from 'components/atoms/PageTitle';
import { ToDoItem } from 'components/organisms/ToDoItem';
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

const ToDoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 5vw);
`;

export const ToDoList = () => {
  return (
    <Container>
      <Contents>
        <PageTitle title="To Do List" />
        <ToDoItemContainer>
          <ToDoItem label="Study" />
          <ToDoItem label="Laundry" />
        </ToDoItemContainer>
      </Contents>
      <ButtonContainer>
        <Button label="Add" color="#0ba3ba" />
      </ButtonContainer>
    </Container>
  );
};
