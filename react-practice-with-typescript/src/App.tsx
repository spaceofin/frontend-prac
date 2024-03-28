import styled from '@emotion/styled';
import { DataPanel } from 'components/DataPanel';
import { AddItem } from 'components/AddItem';
import { ToggleButton } from 'components/ToggleButton';
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

  const [addButtonOn, setAddButtonOn] = useState(false);


  const onDelete = (targetId: string) => {
    setItemList(itemList.filter((item) => item.id !== targetId))

    // print itemList before new rendering
    console.log(itemList);
    console.log(targetId);
  }

  const onAdd = (item: string) => {
    const newItem = { id: uuidv4(), text: item };
    setItemList([...itemList, newItem]);
  };

  return (
    <Container>
      <DataPanel itemList={itemList} onDelete={onDelete} />
      {addButtonOn && <AddItem onAdd={onAdd} />}
      <ToggleButton
        on={addButtonOn}
        onClick={() => setAddButtonOn(!addButtonOn)}
      />
    </Container>
  );
}

export default App;
