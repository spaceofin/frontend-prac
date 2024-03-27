import styled from '@emotion/styled';
import { Title } from 'components/Title';
import { ItemList } from 'components/ItemList';
import { useState } from 'react';


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
    "Study", "Laundry", "Exercise",
  ]);

  const onDelete = (targetItem: string) => {
    setItemList(itemList.filter((item) => item !== targetItem));
    console.log(targetItem);
  }

  return (
    <Container>
      <Title title="To Do List" />
      <ItemList items={itemList} onDelete={onDelete} />
    </Container>
  );
}

export default App;
