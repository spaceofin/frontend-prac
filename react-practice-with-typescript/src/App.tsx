import styled from '@emotion/styled';
import { DataPanel } from 'components/DataPanel';
import { AddItem } from 'components/AddItem';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: max(80vw,800px);
  height: 50vh;
  background-color: #FFDF8E;
`;

const App = () => {
  const [itemList, setItemList] = useState([
    { id: uuidv4(), text: "Study" },
    { id: uuidv4(), text: "Laundry" },
    { id: uuidv4(), text: "Exercise" }
  ]);

  const [showAddItem, setShowItem] = useState(true);


  const onDelete = (targetId: string) => {
    setItemList(itemList.filter((item) => item.id !== targetId))

    // print itemList before new rendering
    console.log(itemList);
    console.log(targetId);
  }

  const onAdd = (item: string) => {
    const newItem = { id: uuidv4(), text: item };
    setItemList([...itemList, newItem]);

    setShowItem(false);
  };

  return (
    <Container>
      <DataPanel itemList={itemList} onDelete={onDelete} />
      {/* <TextInput value={item} onChange={setItem} />
      <Button color="#7EBA00" text="Add" /> */}
      {showAddItem && <AddItem onAdd={onAdd} />}
    </Container>
  );
}

export default App;
