import { useState } from "react";
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
  const [clickedPhotos, setClickedPhotos] = useState(
    Array.from({ length: photosCount }, () => false)
  );

  console.log(clickedPhotos);

  const handleClick = (index) => {
    setClickedPhotos((prevState) => {
      const newClickedPhotos = [...prevState];
      newClickedPhotos[index] = !prevState[index];
      return newClickedPhotos;
    });
  };

  return (
    <Container>
      <PhotosContainer>
        {Array.from({ length: photosCount }, (_, index) => (
          <Photo
            key={index}
            index={index}
            clicked={clickedPhotos[index]}
            handleClick={handleClick}
          />
        ))}
      </PhotosContainer>
    </Container>
  );
};

export default App;
