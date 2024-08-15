import { useState } from "react";
import { Photo } from "../components";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCartPhotos } from "contexts/CartPhotosContext";
import { NavigationBar } from "components";
import { ReactComponent as Inventory } from "assets/icons/inventory.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-contents: center;
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
  margin: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 680px;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  border: 0px;
  border-radius: 5px;
  margin: 0px 10px;
  background-color: ${(props) => props.color};
  font-size: 16px;
  font-weight: 600;
  box-shadow: 3px 3px 0px rgba(128, 128, 128, 1);

  &:active {
    box-shadow: inset 3px 3px 0px rgba(0, 0, 0, 0.5);
  }
`;

const InventoryButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px 0px 10px;
  padding: 0px 5px;
  width: 50px;
  height: 40px;
  border: 0px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  font-size: 16px;
  font-weight: 600;
  box-shadow: 3px 3px 0px rgba(128, 128, 128, 1);

  &:active {
    box-shadow: inset 3px 3px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const Gallery = () => {
  const photosCount = 12;
  const [clickedPhotos, setClickedPhotos] = useState(
    Object.fromEntries(
      Array.from({ length: photosCount }, (_, i) => [i + 1, false])
    )
  );
  const {
    cartPhotoUrls,
    setCartPhotoUrls,
    setRandomNumber,
    photoUrls,
    setPhotoUrls,
  } = useCartPhotos();

  const navigate = useNavigate();

  const handlePhotoClick = (index) => {
    setClickedPhotos((prevState) => {
      const newClickedPhotos = { ...prevState };
      newClickedPhotos[index] = !prevState[index];
      console.log("newClickePhotos:", newClickedPhotos);
      return newClickedPhotos;
    });
  };

  const handleAddToCartClick = () => {
    if (
      cartPhotoUrls.length +
        Object.values(clickedPhotos).filter((value) => value === true).length >
      12
    ) {
      alert("The Cart Is full!");
      return;
    }

    const newPhotoUrls = Object.entries(clickedPhotos)
      .filter(([_, value]) => value)
      .map(([key, _]) => photoUrls[key]);
    setCartPhotoUrls([...new Set([...cartPhotoUrls, ...newPhotoUrls])]);

    console.log("clickedPhotos:", clickedPhotos);

    setClickedPhotos(
      Object.fromEntries(
        Array.from({ length: photosCount }, (_, i) => [i + 1, false])
      )
    );
  };

  const handleReloadClick = () => {
    const randNum = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(randNum);
    console.log("setRandomNumber:", randNum);

    Object.keys(clickedPhotos).forEach((key) => {
      clickedPhotos[key] = false;
    });

    setPhotoUrls([]);
  };

  const handleInventoryClick = () => {
    navigate("/photos-cart");
  };

  return (
    <Container>
      <NavigationBar />
      <ButtonWrapper>
        <Button color="lightgray" onClick={handleReloadClick}>
          Reload Photos
        </Button>
        <Button color="lightgray" onClick={handleAddToCartClick}>
          Save Photos
        </Button>
        <InventoryButton onClick={handleInventoryClick} color="lightgray">
          <Inventory />
        </InventoryButton>
      </ButtonWrapper>
      <ContentsWrapper>
        <PhotosContainer>
          {Array.from({ length: photosCount }, (_, index) => (
            <Photo
              key={index}
              index={index}
              clicked={clickedPhotos[index]}
              handleClick={handlePhotoClick}
              needCheckCircle={true}
            />
          ))}
        </PhotosContainer>
      </ContentsWrapper>
    </Container>
  );
};
