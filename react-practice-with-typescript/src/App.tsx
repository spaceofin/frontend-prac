import styled from '@emotion/styled';
import { Routes, Route } from 'react-router-dom';
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

const NotFound = styled.div`
	text-align: center;
  font-size: 30px;
`;

function App() {
  return (
    <Container>
      <ItemListContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <DataPanel />
                <InputModal />
              </>
            }
          />
          <Route
            path="*"
            element={
              <NotFound>
                404
                <br />
                NOT FOUND
              </NotFound>
            }
          />
        </Routes>
      </ItemListContextProvider>
    </Container>
  );
}

export default App;
