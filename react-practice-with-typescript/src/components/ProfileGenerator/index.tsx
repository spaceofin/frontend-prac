import styled from "styled-components";
import { ReactComponent as Dog1 } from "assets/icons/dog1.svg";
import { ReactComponent as Dog2 } from "assets/icons/dog2.svg";
import { ReactComponent as Dog3 } from "assets/icons/dog3.svg";
import { ReactComponent as Dog4 } from "assets/icons/dog4.svg";
import { ReactComponent as Dog5 } from "assets/icons/dog5.svg";
import { useState } from "react";

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
      ? "inset 5px 0px 0px orange, inset -5px 0px 0px orange, inset 0px 5px 0px orange, inset 0px -5px 0px orange"
      : null};
  border-radius: 10px;
  //   z-index: 1;
`;

export const ProfileGenerator = () => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleClick = (index: number) => {
    const newClicked = [...clicked];
    newClicked[index] = !newClicked[index];
    setClicked(newClicked);
  };
  return (
    <Container>
      Choose Dog for Profile
      <DogsContainer>
        <DogWrapper clicked={clicked[0]} onClick={() => handleClick(0)}>
          <Dog1 />
        </DogWrapper>
        <DogWrapper clicked={clicked[1]} onClick={() => handleClick(1)}>
          <Dog2 />
        </DogWrapper>
        <DogWrapper clicked={clicked[2]} onClick={() => handleClick(2)}>
          <Dog3 />
        </DogWrapper>
        <DogWrapper clicked={clicked[3]} onClick={() => handleClick(3)}>
          <Dog4 />
        </DogWrapper>
        <DogWrapper clicked={clicked[4]} onClick={() => handleClick(4)}>
          <Dog5 />
        </DogWrapper>
      </DogsContainer>
    </Container>
  );
};
