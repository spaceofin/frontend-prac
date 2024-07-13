import styled from "styled-components";
import { ReactComponent as Dog1 } from "assets/icons/dog1.svg";
import { ReactComponent as Dog2 } from "assets/icons/dog2.svg";
import { ReactComponent as Dog3 } from "assets/icons/dog3.svg";
import { ReactComponent as Dog4 } from "assets/icons/dog4.svg";
import { ReactComponent as Dog5 } from "assets/icons/dog5.svg";
import React, { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 500px;
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

interface DogWrapperProps {
  clicked: boolean;
}

const DogWrapper = styled.div<DogWrapperProps>`
  //   width: 200px;
  //   height: 200px;
  //   border: 5px solid orange;
  padding: 5px;
  margin: 2px;
  //   box-shadow: inset 5px 5px 0px orange, inset -5px -5px 0px orange;
  box-shadow: ${(props) =>
    props.clicked
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
  margin-top: 10px;
  padding: 15px;
  width: 450px;
  height: 200px;
  background-color: #cced71;
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
  border-radius: 5px;
  padding-left: 10px;
  border: 2px solid gray;
  margin: 2px 0px;
`;

const SmallText = styled.text`
  // font-family: cursive;
  font-size: 16px;
  font-weight: normal;
  margin: 5px 5px;
`;

const BirthdaySelect = styled.select`
  font-size: 16px;
  border-radius: 5px;
  padding-left: 10px;
  border: 2px solid gray;
  margin: 0px 1px;
  width: 100px;
`;

const BirthdaySelectWrapper = styled.div`
  display: flex;
  margin: 2px 0px;
  font-size: 16px;
  font-weight: normal;
`;

const dogComponents = [Dog1, Dog2, Dog3, Dog4, Dog5];

export const ProfileGenerator = () => {
  const [clickedDog, setClickedDog] = useState<number | null>(null);
  const [SelectedDog, setSelectedDog] = useState<React.ComponentType>(Blank);
  const [profile, setProfile] = useState({
    name: "",
    year: "",
    month: "",
    day: "",
    password: "",
  });

  const handleClick = (index: number) => {
    setClickedDog(index);
    setSelectedDog(dogComponents[index]);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) =>
    (currentYear - i).toString()
  );
  const months = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );
  const days = Array.from({ length: 31 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );

  return (
    <Container>
      Choose Dog for Profile
      <DogsContainer>
        {dogComponents.map((Dog, index) => (
          <DogWrapper
            key={index}
            clicked={clickedDog ? clickedDog === index : false}
            onClick={() => handleClick(index)}>
            <Dog />
          </DogWrapper>
        ))}
      </DogsContainer>
      <ProfileContainer>
        <ProfileImageWrapper>
          {SelectedDog && <SelectedDog />}
        </ProfileImageWrapper>
        <ProfileWrapper>
          <LineText>Profile</LineText>
          <StyledForm>
            <StyledInput placeholder="name" value={profile.name} />
            <StyledInput placeholder="password" value={profile.password} />
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
    </Container>
  );
};
