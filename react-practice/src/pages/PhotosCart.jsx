import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { Photo } from "../components";
import { useCartPhotos } from "contexts/CartPhotosContext";
import { NavigationBar } from "components";

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 20px;
  width: auto;
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
  margin: 0px 10px;
  padding: 20px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
  margin: 0px 20px;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  border: 0px;
  border-radius: 5px;
  background-color: lightgrey;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 3px 3px 0px rgba(128, 128, 128, 1);

  &:active {
    box-shadow: inset 3px 3px 0px rgba(0, 0, 0, 0.5);
  }
`;

const StyledImg = styled.img`
  border-radius: 5px;
  margin: 5px;
`;

export const PhotosCart = () => {
  const { cartPhotoUrls } = useCartPhotos();
  console.log("cartphotos:", cartPhotoUrls);

  // const handleCancelClick = (photoNumber) => {
  //   setCartPhotoUrls(cartPhotoUrls.filter((number) => number !== photoNumber));
  // };

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <NavigationBar />
      <TopBar>
        <Title>CART</Title>
        <Button onClick={handleBackClick}>BACK</Button>
      </TopBar>
      <PhotosCartContainer>
        {/* {cartPhotos.length > 0 &&
          cartPhotos.map((photoNumber, index) => (
            <Photo
              key={index}
              index={photoNumber}
              needCancel={true}
              handleCancelClick={handleCancelClick}
            />
          ))} */}
        {cartPhotoUrls.length > 0 &&
          cartPhotoUrls.map((photoUrl, index) => (
            <StyledImg key={index} src={photoUrl} alt="random image" />
          ))}
      </PhotosCartContainer>
    </Container>
  );
};
