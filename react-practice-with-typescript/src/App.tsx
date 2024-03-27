import styled from '@emotion/styled';
import { DataPanel } from 'components/DataPanel';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 50vh;
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

    console.log(itemList);
    console.log(targetId);
  }

  return (
    <Container>
      <DataPanel itemList={itemList} onDelete={onDelete} />
    </Container>
  );
}

export default App;
