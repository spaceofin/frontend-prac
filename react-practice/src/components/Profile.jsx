import styled from "styled-components";
import defaultUser from "assets/images/user_300.png";
import { useAuth } from "contexts/AuthContext";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 30px;
  background-color: #fbffde;
  border-radius: 10px;
  width: 550px;
  height: 250px;
`;

const UserImage = styled.img`
  margin: 30px 50px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 270px;
  height: 200px;
  // background-color: gray;
  padding: 20px 5px;
`;

const UserName = styled.div`
  font-size: 24px;
`;

const InfoText = styled.span`
  display: inline-block;
  font-size: 22px;
  margin: 10px 20px 10px 0px;
`;

export const Profile = () => {
  const { user } = useAuth();
  const [postCount, setPostCount] = useState(0);
  const [friendsCount, setFriendsCount] = useState(0);

  return (
    <Container>
      <UserImage src={defaultUser} alt="user" width="150px" height="150px" />
      <UserInfo>
        <UserName>{user ? user : "No User Information"}</UserName>
        <div>
          <InfoText>Post {postCount}</InfoText>
          <InfoText>Friends {friendsCount}</InfoText>
        </div>
      </UserInfo>
    </Container>
  );
};
