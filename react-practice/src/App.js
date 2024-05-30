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
  min-width: 630px;
  min-height: 840px;
  padding: 20px;
  border: 5px solid #ffbf15;
  background-color: #fff192;
  border-radius: 10px;
`;

const App = () => {
  const photosCount = 12;
  return (
    <Container>
      <PhotosContainer>
        {Array.from({ length: photosCount }, (_, index) => (
          <Photo key={index} index={index + 1} />
        ))}
      </PhotosContainer>
    </Container>
  );
};

export default App;
