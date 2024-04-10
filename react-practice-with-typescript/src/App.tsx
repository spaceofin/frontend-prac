import styled from '@emotion/styled';
import { Routes, Route } from 'react-router-dom';
import { DataPanel } from 'pages/DataPanel';
import { AddItem } from 'pages/AddItem';
import { ItemListContextProvider } from 'contexts/ItemList';
import { Header } from 'components/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: max(80vw,900px);
  height: max(50vh,500px);
  background-color: #ffdf8e;
`;

const NotFound = styled.div`
	text-align: center;
  font-size: 30px;
`;

function App() {
  return (
    <Container>
      <ItemListContextProvider>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<DataPanel />}
          />
          <Route
            path="/add"
            element={<AddItem />}
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
    </Container >
  );
}

export default App;
