import { Photo } from "./components/Photo";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-contents: center;
  margin: 30px;
`;

const PhotosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 210px);
  padding: 20px;
  border: 5px solid #ffbf15;
  background-color: #fff192;
  border-radius: 10px;
`;

const App = () => {
  return (
    <Container>
      <PhotosContainer>
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
      </PhotosContainer>
    </Container>
  );
};

export default App;
