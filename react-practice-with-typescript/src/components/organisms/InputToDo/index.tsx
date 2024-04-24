import styled from '@emotion/styled';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ToDoListContext } from 'contexts/ToDoList';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

export const InputToDo = () => {
  const [toDo, setToDo] = useState('');
  const { onAdd } = useContext(ToDoListContext);
  const navigate = useNavigate();

  const onAddToDo = () => {
    if (toDo === '') return;

    console.log('Add button clicked')
    onAdd(toDo);
    setToDo('');
    navigate('/');
  };

  return (
    <Container>
      <Input value={toDo} onChange={setToDo} />
      <Button label="Add" color="#f72b2b" onClick={onAddToDo} />
    </Container>
  );
};
