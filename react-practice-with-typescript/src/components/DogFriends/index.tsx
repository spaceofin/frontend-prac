import styled from "styled-components";
import {
  useState,
  ChangeEvent,
  ChangeEventHandler,
  MouseEvent,
  MouseEventHandler,
} from "react";
import { useProfiles, Profile } from "contexts/ProfilesContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 500px;
  margin: 20px;
  padding: 15px;
  border-radius: 10px;
  border: 5px solid #666666;
  font-size: 25px;
  font-weight: bold;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100px;
  gap: 2px;
  margin: 20px;
  padding: 20px;
  padding-bottom: 15px;
  background-color: #4ee65f;
  border-radius: 10px;
  font-size: 20px;
  font-weight: normal;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  width: 170px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 25px;
  width: 300px;
`;

const LoginButton = styled.button`
  margin: 7px 25px;
  height: 25px;
  border-radius: 5px;
  background-color: white;

  &:active {
    background-color: lightgray;
    box-shadow: inset 3px 3px 0px rgba(127, 127, 127, 0.4);
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100px;
  gap: 2px;
  margin: 20px;
  margin-bottom: 10px;
  padding: 20px;
  padding-bottom: 15px;
  background-color: #4ee65f;
  border-radius: 10px;
  font-size: 20px;
  font-weight: normal;
  text-indent: 25px;
`;

const LogOutButton = styled.button`
  margin: 7px 25px;
  height: 25px;
  border-radius: 5px;
  background-color: white;

  &:active {
    background-color: lightgray;
    box-shadow: inset 3px 3px 0px rgba(127, 127, 127, 0.4);
  }
`;

const FriendCandidates = styled.div`
  width: 350px;
  height: 70px;
  background-color: #dddddd;
  border-radius: 10px;
  margin: 20px;
  margin-top: 10px;
  padding: 20px;
  overflow: auto;
`;

const FriendList = styled.div`
  width: 350px;
  height: 25px;
  background-color: #4ee65f;
  border-radius: 10px;
  margin: 20px;
  margin-top: 10px;
  padding: 20px;
  font-size: 14px;
  font-weight: normal;
  overflow-x: auto;
`;

const Friend = styled.button<{ isActive: boolean }>`
  margin: 5px;
  padding: 10px 15px;
  font-size: 20px;
  font-weight: 500;
  // background-color: burlywood;
  background-color: ${(props) => (props.isActive ? "#A3DEFF" : "burlywood")};
  border-radius: 5px;
  border: none;

  &:active {
    box-shadow: inset 3px 3px 0px rgba(255, 255, 255, 0.4),
      inset -3px -3px 0px rgba(255, 255, 255, 0.4);
  }
`;

const FriendText = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: normal;
  margin: 0px 10px;
`;

const Message = styled.span`
  font-size: 18px;
  font-weight: normal;
  margin: 10px;
`;

const FriendListTitle = styled.div`
  display: flex;
  align-self: start;
  margin-left: 70px;
  margin-bottom: 0px;
  font-size: 20px;
  font-weight: 500;
  color: #14692d;
`;

type LoginProps = {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

const Login = ({ handleChange, handleClick }: LoginProps) => {
  return (
    <LoginForm>
      <InputWrapper>
        <label>Name:</label>
        <StyledInput type="text" name="name" onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <label>Password:</label>
        <StyledInput type="text" name="password" onChange={handleChange} />
      </InputWrapper>
      <LoginButton onClick={handleClick}>LOGIN</LoginButton>
    </LoginForm>
  );
};

const CurrentProfile = ({
  profile,
  handleLogout,
}: {
  profile: Profile;
  handleLogout: (event: MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <>
      <ProfileContainer>
        <span>Name: {profile.name}</span>
        <span>Birthday: {profile.birthday}</span>
        <LogOutButton onClick={handleLogout}>LOGOUT</LogOutButton>
      </ProfileContainer>
      <FriendListTitle>Friends List</FriendListTitle>
      <FriendList style={{ backgroundColor: "#4ee65f" }}>
        {profile.friends.length !== 0 ? (
          profile.friends.map((friend, index) => (
            <FriendText key={index}>{friend}</FriendText>
          ))
        ) : (
          <Message>{profile.name} has no friends</Message>
        )}
      </FriendList>
    </>
  );
};

export const DogFriends = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { profiles } = useProfiles();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentProfile, setCurrentProfile] = useState<Profile | undefined>(
    undefined
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;

    if (name === "name") {
      setName(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const targetProfile = profiles.find(
      (profile) => profile.name === name && profile.password === password
    );

    if (targetProfile) {
      setIsLoggedIn(true);
      setCurrentProfile(targetProfile);
      setName("");
      setPassword("");
      alert("Login succeeded");
    } else {
      alert("Login failed");
    }
    console.log("name:", name, "password:", password);
  };

  const handleLogout = (event: MouseEvent<HTMLButtonElement>) => {
    setIsLoggedIn(false);
    setCurrentProfile(undefined);
    alert("Logout succeeded");
  };

  console.log("currentProfile:", currentProfile);

  const handleFriendClick = (
    event: MouseEvent<HTMLButtonElement>,
    id: string
  ): void => {
    const {
      currentTarget: { textContent },
    } = event;

    if (currentProfile) {
      const updatedFriends = currentProfile?.friends.includes(textContent)
        ? currentProfile.friends.filter((friend) => friend !== textContent)
        : [...currentProfile.friends, textContent];
      const updatedProfile = {
        ...currentProfile,
        friends: updatedFriends,
      };
      setCurrentProfile(updatedProfile);
    }
  };

  const isActive = (name: string): boolean => {
    return currentProfile?.friends.includes(name) ?? false;
  };

  console.log("currentProfile", currentProfile);

  return (
    <Container>
      Log in with the Dog Profile you created
      {isLoggedIn && currentProfile ? (
        <>
          <CurrentProfile
            profile={currentProfile}
            handleLogout={handleLogout}
          />
          Select a Friend
          <FriendCandidates>
            {profiles.map(
              (profile) =>
                profile.id !== currentProfile.id && (
                  <Friend
                    key={profile.id}
                    isActive={isActive(profile.name)}
                    onClick={(event) => handleFriendClick(event, profile.id)}
                  >
                    <span>{profile.name}</span>
                  </Friend>
                )
            )}
          </FriendCandidates>
        </>
      ) : (
        <Login handleChange={handleChange} handleClick={handleLogin} />
      )}
    </Container>
  );
};
