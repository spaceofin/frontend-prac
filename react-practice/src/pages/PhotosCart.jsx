import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCartPhotos } from "contexts/CartPhotosContext";
import { NavigationBar } from "components";
import { CartPhoto } from "components";
import { useState, useEffect } from "react";

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin: 0px 10px;
  padding: 20px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 680px;
  padding-left: 50px;
  box-sizing: border-box;
`;

const ButtonGroup = styled.div``;

const Button = styled.button`
  width: 150px;
  height: 40px;
  border: 0px;
  border-radius: 5px;
  margin: 0px 10px;
  background-color: lightgrey;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 3px 3px 0px rgba(128, 128, 128, 1);

  &:active {
    box-shadow: inset 3px 3px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const PhotosCart = () => {
  const { cartPhotoUrls, setCartPhotoUrls } = useCartPhotos();
  const [isClicked, setIsClicked] = useState(
    Array(cartPhotoUrls.length).fill(false)
  );
  console.log("cartphotos:", cartPhotoUrls);

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  const handleRemoveClick = () => {
    const indexesToRemoveSet = isClicked.reduce(
      (clickedIndexes, clicked, index) => {
        if (clicked) clickedIndexes.add(index);
        return clickedIndexes;
      },
      new Set()
    );

    const newCartPhotoUrls = cartPhotoUrls.filter(
      (_, index) => !indexesToRemoveSet.has(index)
    );
    setCartPhotoUrls(newCartPhotoUrls);
  };

  useEffect(() => {
    setIsClicked(Array(cartPhotoUrls.length).fill(false));
  }, [cartPhotoUrls]);

  console.log("isClicked:", isClicked);

  return (
    <Container>
      <NavigationBar />
      <TopBar>
        <Title>CART</Title>
        <ButtonGroup>
          <Button onClick={handleRemoveClick}>Remove</Button>
          <Button onClick={handleBackClick}>Back</Button>
        </ButtonGroup>
      </TopBar>
      <PhotosCartContainer>
        {cartPhotoUrls.length > 0 &&
          cartPhotoUrls.map((photoUrl, index) => (
            <CartPhoto
              key={index}
              index={index}
              url={photoUrl}
              isClicked={isClicked[index]}
              setIsClicked={setIsClicked}
            />
          ))}
      </PhotosCartContainer>
    </Container>
  );
};
