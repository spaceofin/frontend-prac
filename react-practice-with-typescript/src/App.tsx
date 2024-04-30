import styled from "styled-components";

import * as Chance from "./data/chance";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
  width: 500px;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
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
  background-color: orange;
`;

const UserProfile = () => {
  return (
    <Container>
      <ImageWrapper />
      <ProfileContainer>
        <LineText>{Chance.randomName()}</LineText>
        <LineText>{Chance.randomProfession()}</LineText>
        <LineText>{Chance.randomDate()}</LineText>
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
