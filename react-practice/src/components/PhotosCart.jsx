import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Photo } from "./Photo";

const Container = styled.div`
  display: flex;
`;

const PhotosCartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 210px);
  align-content: start;
  grid-gap: 0;
  min-width: 220px;
  min-height: 840px;
  border: 5px solid #22b14c;
  background-color: #bae09e;
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
`;

export const PhotosCart = () => {
  const location = useLocation();
  console.log(location.state.cartPhotos);
  const cartPhotos = location.state.cartPhotos;
  return (
    <Container>
      <PhotosCartContainer>
        {cartPhotos.length > 0 &&
          cartPhotos.map((photoNumber, index) => (
            <Photo key={index} index={photoNumber} needCheckCircle={false} />
          ))}
      </PhotosCartContainer>
    </Container>
  );
};
