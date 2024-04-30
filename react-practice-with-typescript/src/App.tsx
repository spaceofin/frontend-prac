import styled from "styled-components";

import * as Data from "data";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
  padding: 15px;
  width: 500px;
  background-color: #CCED71;
  border-radius: 10px;
`;

const ImageWrapper = styled.img`
  border-radius: 10px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;

const LineText = styled.span`
  font-family: cursive;
  font-size: 20px;
`;

const UserProfile = () => {
  return (
    <Container>
      <ImageWrapper src={Data.picsumUrl()} />
      <ProfileContainer>
        <LineText>{Data.randomName()}</LineText>
        <LineText>{Data.randomProfession()}</LineText>
        <LineText>{Data.randomDayMonthYear()}</LineText>
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
