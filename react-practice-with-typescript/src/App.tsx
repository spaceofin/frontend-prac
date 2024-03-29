import styled from '@emotion/styled';
import { DataPanel } from 'components/DataPanel';
import { InputModal } from 'components/InputModal';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: max(80vw,900px);
  height: max(50vh,500px);
  background-color: #FFDF8E;
`;

const App = () => {
  const [itemList, setItemList] = useState([
    { id: uuidv4(), text: "Study" },
    { id: uuidv4(), text: "Laundry" },
    { id: uuidv4(), text: "Exercise" }
  ]);

  const onDelete = (targetId: string) => {
    setItemList(itemList.filter((item) => item.id !== targetId))
  }

  const onAdd = (item: string) => {
    const newItem = { id: uuidv4(), text: item };
    setItemList([...itemList, newItem]);
  };

  return (
    <Container>
      <DataPanel itemList={itemList} onDelete={onDelete} />
      <InputModal onAdd={onAdd} />
    </Container>
  );
}

export default App;
