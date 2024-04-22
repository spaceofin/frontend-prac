import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

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

interface Props {
  readonly toDoList: ReadonlyArray<string>;
  readonly onDelete?: (toDo: string) => void;
}

export const ToDoList = ({ toDoList, onDelete }: Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Contents>
        <PageTitle title="To Do List" />
        <ToDoItemContainer>
          {toDoList.map((toDo) => (
            <ToDoItem
              key={toDo}
              label={toDo}
              onDelete={() => {
                if (typeof onDelete === 'function') onDelete(toDo);
              }}
            />
          ))}
        </ToDoItemContainer>
      </Contents>
      <ButtonContainer>
        <Button label="Add" color="#0ba3ba" onClick={() => navigate('/add')} />
      </ButtonContainer>
    </Container>
  );
};
