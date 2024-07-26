import styled from "styled-components";
import { ReactComponent as Dog1 } from "assets/icons/dog1.svg";
import { ReactComponent as Dog2 } from "assets/icons/dog2.svg";
import { ReactComponent as Dog3 } from "assets/icons/dog3.svg";
import { ReactComponent as Dog4 } from "assets/icons/dog4.svg";
import { ReactComponent as Dog5 } from "assets/icons/dog5.svg";
import React, { useState } from "react";
import { getYears, getMonths, getDays } from "utils/dateUtils";
import { useProfiles, Profile } from "contexts/ProfilesContext";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 870px;
  margin: 20px;
  margin-bottom: 5px;
  padding: 15px;
  border-radius: 10px;
  border: 5px solid #666666;
  font-size: 25px;
  font-weight: bold;
`;

const DogsContainer = styled.div`
  display: flex;
  margin: 20px 0px;
`;

// interface DogWrapperProps {
//   $clicked: boolean;
// }

const DogWrapper = styled.div<{ $clicked: boolean }>`
  //   width: 200px;
  //   height: 200px;
  //   border: 5px solid orange;
  padding: 5px;
  margin: 2px;
  //   box-shadow: inset 5px 5px 0px orange, inset -5px -5px 0px orange;
  box-shadow: ${(props) =>
    props.$clicked
      ? "inset 5px 0px 0px lime, inset -5px 0px 0px green, inset 0px 5px 0px lime, inset 0px -5px 0px green"
      : null};
  border-radius: 10px;
  //   z-index: 1;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  padding: 15px;
  width: 450px;
  height: 200px;
  background-color: ${(props) => props.color};
  // background-color: #cced71;
  border-radius: 10px;
`;

const ProfileImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background-color: white;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;

const LineText = styled.span`
  font-family: cursive;
  font-size: 20px;
`;

const Blank = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background-color: white;
  border: 3px dashed gray;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0px;
  width: 230px;
`;

const StyledInput = styled.input`
  font-size: 20px;
  height: 25px;
  border-radius: 5px;
  padding-left: 10px;
  border: 2px solid gray;
  margin: 2px 0px;
`;

const SmallText = styled.span`
  // font-family: cursive;
  font-family: Arial, sans-serif;
  font-size: 20px;
  font-weight: normal;
  margin: 5px;
`;

const BirthdaySelect = styled.select`
  font-size: 16px;
  border-radius: 5px;
  padding-left: 10px;
  border: 2px solid gray;
  margin: 0px 1px;
  width: 100px;
  background-color: white;
`;

const BirthdaySelectWrapper = styled.div`
  display: flex;
  margin: 2px 0px;
  font-size: 16px;
  font-weight: normal;
`;

const StyledButton = styled.button`
  align-self: flex-end;
  margin-right: 5px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 500;
  background-color: #effcdb;
  border: 3px solid #3fc248;
  border-radius: 5px;

  &:active {
    box-shadow: inset 3px 3px 0px rgba(2, 181, 93, 0.4),
      inset -3px -3px 0px rgba(2, 181, 93, 0.4);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  width: inherit;
  justify-content: flex-end;
  margin-right: 20px;
`;

const ProfileButton = styled.button`
  align-self: flex-end;
  margin: 5px;
  padding: 10px 15px;
  font-size: 20px;
  font-weight: 500;
  background-color: burlywood;
  border-radius: 5px;
  border: none;

  &:active {
    box-shadow: inset 3px 3px 0px rgba(255, 255, 255, 0.4),
      inset -3px -3px 0px rgba(255, 255, 255, 0.4);
  }
`;

const ProfileListContainer = styled.div`
  margin: 20px;
  width: 450px;
  height: 100px;
  overflow: auto;
  text-align: left;
`;

const dogComponents = [Dog1, Dog2, Dog3, Dog4, Dog5];

const blankProfile = {
  id: "",
  image: Blank,
  name: "",
  year: "",
  month: "",
  day: "",
  password: "",
};

interface DogProfileProps {
  SelectedDog: React.ComponentType;
  profile: Profile;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const DogProfile: React.FC<DogProfileProps> = ({
  SelectedDog,
  profile,
  handleChange,
}) => {
  const years = getYears();
  const months = getMonths();
  const days = getDays();

  return (
    <ProfileContainer color="#cced71">
      <ProfileImageWrapper>
        {SelectedDog ? <SelectedDog /> : null}
      </ProfileImageWrapper>
      <ProfileWrapper>
        <LineText>Profile</LineText>
        <StyledForm>
          <StyledInput
            name="name"
            placeholder="name"
            value={profile.name}
            onChange={handleChange}
          />
          <StyledInput
            name="password"
            placeholder="password"
            value={profile.password}
            onChange={handleChange}
          />
          <SmallText>Birthday</SmallText>
          <BirthdaySelectWrapper>
            <BirthdaySelect
              name="year"
              value={profile.year}
              onChange={handleChange}>
              <option value="">Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </BirthdaySelect>
            <BirthdaySelect
              name="month"
              value={profile.month}
              onChange={handleChange}>
              <option value="">Month</option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </BirthdaySelect>
            <BirthdaySelect
              name="day"
              value={profile.day}
              onChange={handleChange}>
              <option value="">Day</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </BirthdaySelect>
          </BirthdaySelectWrapper>
        </StyledForm>
      </ProfileWrapper>
    </ProfileContainer>
  );
};

const SelectedProfile: React.FC<{ selectedProfile: Profile }> = ({
  selectedProfile,
}) => {
  return (
    <ProfileContainer color="gainsboro">
      <ProfileImageWrapper>{selectedProfile.image}</ProfileImageWrapper>
      <ProfileWrapper>
        <LineText>Profile</LineText>
        <SmallText>
          name: {selectedProfile.name}
          <br />
          Birthday: {selectedProfile.year}.{selectedProfile.month}.
          {selectedProfile.day}.
        </SmallText>
      </ProfileWrapper>
    </ProfileContainer>
  );
};

export const ProfileGenerator = () => {
  const [clickedDog, setClickedDog] = useState<number | null>(null);
  const [SelectedDog, setSelectedDog] = useState<React.ComponentType>(Blank);
  const [profile, setProfile] = useState<Profile>(blankProfile);
  const { profiles, setProfiles } = useProfiles();
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  // console.log("profile: ", profile);
  console.log("profiles: ", profiles);

  const handleProfileImageSelect = (index: number) => {
    setClickedDog(index);
    setSelectedDog(dogComponents[index]);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    if (SelectedDog === Blank) {
      alert("Select Profile Image");
      return;
    }
    const updatedProfile = { ...profile, image: <SelectedDog />, id: uuidv4() };
    console.log("updatedProfile", updatedProfile);

    if (!Object.values(updatedProfile).every((x) => x !== Blank && x !== "")) {
      alert("Enter All Values");
      return;
    }
    setProfiles((prevProfiles: Profile[] | []) => [
      ...prevProfiles,
      updatedProfile,
    ]);
  };

  const handleClear = () => {
    setProfile(blankProfile);
    setSelectedDog(Blank);
  };

  const handleProfileClick = (profile: Profile) => {
    setSelectedProfile(profile);
  };

  return (
    <Container>
      Choose Dog for Profile
      <DogsContainer>
        {dogComponents.map((Dog, index) => (
          <DogWrapper
            key={index}
            $clicked={clickedDog ? clickedDog === index : false}
            onClick={() => handleProfileImageSelect(index)}>
            <Dog />
          </DogWrapper>
        ))}
      </DogsContainer>
      <ButtonGroup>
        <StyledButton onClick={handleSaveClick}>Save Profile</StyledButton>
        <StyledButton onClick={handleClear}>Clear</StyledButton>
      </ButtonGroup>
      <DogProfile
        SelectedDog={SelectedDog}
        profile={profile}
        handleChange={handleChange}
      />
      <ProfileListContainer>
        {profiles &&
          profiles.map((profile: Profile, index: number) => {
            return (
              <ProfileButton
                key={index}
                onClick={() => handleProfileClick(profile)}>
                {profile.name}
              </ProfileButton>
            );
          })}
      </ProfileListContainer>
      {selectedProfile ? (
        <SelectedProfile selectedProfile={selectedProfile} />
      ) : null}
    </Container>
  );
};
