import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Photo } from "./Photo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  width: 140px;
  height: 50px;
  background-color: #22b14c;
  font-size: 30px;
  color: #474747;
  border-radius: 10px 10px 0px 0px;
  border-bottom: none;
`;

const PhotosCartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 210px);
  align-content: start;
  grid-gap: 0;
  min-width: 220px;
  max-width: 630px;
  min-height: 840px;
  border: 5px solid #22b14c;
  background-color: #bae09e;
  border-radius: 10px;
  margin-left: 10px;
  padding: 20px;
`;

export const PhotosCart = () => {
  const location = useLocation();
  console.log(location.state.cartPhotos);
  const cartPhotos = location.state.cartPhotos;
  return (
    <Container>
      <Title>CART</Title>
      <PhotosCartContainer>
        {cartPhotos.length > 0 &&
          cartPhotos.map((photoNumber, index) => (
            <Photo key={index} index={photoNumber} needCancel={true} />
          ))}
      </PhotosCartContainer>
    </Container>
  );
};
