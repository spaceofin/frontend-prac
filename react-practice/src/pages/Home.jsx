import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";
import { NavigationBar } from "components";
import { Profile } from "components/Profile";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-contents: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
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
  // justify-content: right;
  justify-content: flex-end;
  width: 670px;
  margin-left: 10px;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  border: 0px;
  border-radius: 5px;
  // background-color: lightgrey;
  background-color: ${(props) => props.color};
  font-size: 16px;
  font-weight: 600;
  box-shadow: 3px 3px 0px rgba(128, 128, 128, 1);

  &:active {
    box-shadow: inset 3px 3px 0px rgba(0, 0, 0, 0.5);
  }
`;

const Spacer = styled.div`
  width: 30px;
  height: inherit;
`;

export const Home = () => {
  const { user } = useAuth();

  console.log("user is ", user);
  if (user === null) console.log("user is null");

  const navigate = useNavigate();

  const handleUploadPhotos = () => {
    alert("Upload Photos");
  };

  const handleGoToGalleryClick = () => {
    navigate("/gallery");
  };

  return (
    <Container>
      <NavigationBar />
      <ButtonWrapper>
        <Button color="lightgray" onClick={handleUploadPhotos}>
          Upload Photos
        </Button>
        <Spacer />
        <Button color="lightgray" onClick={handleGoToGalleryClick}>
          Go To Gallery
        </Button>
      </ButtonWrapper>
      <ContentsWrapper>
        <Content>
          <Profile />
        </Content>
      </ContentsWrapper>
    </Container>
  );
};
