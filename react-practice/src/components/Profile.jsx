import styled from "styled-components";
import defaultUser from "assets/images/user_300.png";
import { useAuth } from "contexts/AuthContext";
import { useState, useRef } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 30px;
  background-color: #fbffde;
  border-radius: 10px;
  width: 550px;
  height: 250px;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
`;

const UserImage = styled.img`
  margin: 30px 50px;
  width: 150px;
  height: 150px;

  &:hover {
    cursor: pointer;
  }
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
  const [profileImage, setProfileImage] = useState(null);
  const profileImageInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
    }
  };

  const handleImageClick = () => {
    profileImageInputRef.current.click();
  };

  return (
    <Container>
      <ProfileImageContainer>
        {profileImage ? (
          <UserImage
            onClick={handleImageClick}
            src={profileImage}
            alt="profile-image"
          />
        ) : (
          <UserImage
            onClick={handleImageClick}
            src={defaultUser}
            alt="deafult-user"
          />
        )}
        <input
          type="file"
          accept="image/*"
          ref={profileImageInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </ProfileImageContainer>
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
