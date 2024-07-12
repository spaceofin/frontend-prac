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
  margin-top: 10px;
  padding: 15px;
  width: 450px;
  height: 150px;
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

const dogComponents = [Dog1, Dog2, Dog3, Dog4, Dog5];

export const ProfileGenerator = () => {
  const [clicked, setClicked] = useState<number | null>(null);
  const [SelectedDog, setSelectedDog] = useState<React.ComponentType | null>(
    null
  );

  const handleClick = (index: number) => {
    setClicked(index);
    setSelectedDog(dogComponents[index]);
  };

  return (
    <Container>
      Choose Dog for Profile
      <DogsContainer>
        {dogComponents.map((Dog, index) => (
          <DogWrapper
            key={index}
            clicked={clicked === index}
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
        </ProfileWrapper>
      </ProfileContainer>
    </Container>
  );
};
