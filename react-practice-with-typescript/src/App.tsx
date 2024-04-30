import styled from "styled-components";

import * as Data from "data";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
  width: 500px;
`;

const ImageWrapper = styled.img`
  // width: 200px;
  // height: 200px;
  background-color: lightGrey;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
  background-color: Grey;
`;

const LineText = styled.span`
  font-size: 20px;
  // background-color: orange;
`;

const UserProfile = () => {
  return (
    <Container>
      <ImageWrapper src={Data.picsumUrl()} />
      <ProfileContainer>
        <LineText>{Data.randomName()}</LineText>
        <LineText>{Data.randomProfession()}</LineText>
        <LineText>{Data.randomDate()}</LineText>
      </ProfileContainer>
    </Container>
  );
};

export default function App() {
  return (
    <div>
      <UserProfile />
    </div>
  );
}
