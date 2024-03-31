import styled from '@emotion/styled';
import { DataPanel } from 'components/DataPanel';
import { InputModal } from 'components/InputModal';
import { ItemListContextProvider } from 'contexts/ItemList';

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
  return (
    <Container>
      <ItemListContextProvider>
        <DataPanel />
        <InputModal />
      </ItemListContextProvider>
    </Container>
  );
}

export default App;
