import styled from "styled-components";
import { ReactComponent as Dog1 } from "assets/icons/dog1.svg";
import { ReactComponent as Dog2 } from "assets/icons/dog2.svg";
import { ReactComponent as Dog3 } from "assets/icons/dog3.svg";
import { ReactComponent as Dog4 } from "assets/icons/dog4.svg";
import { ReactComponent as Dog5 } from "assets/icons/dog5.svg";

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

const DogWrapper = styled.div`
  //   width: 200px;
  //   height: 200px;
  //   border: 5px solid orange;
  padding: 5px;
  margin: 2px;
  //   box-shadow: inset 5px 5px 0px orange, inset -5px -5px 0px orange;
  box-shadow: inset 5px 0px 0px orange, inset -5px 0px 0px orange,
    inset 0px 5px 0px orange, inset 0px -5px 0px orange;
  border-radius: 10px;
  //   z-index: 1;
`;

export const ProfileGenerator = () => {
  const handleClick = () => {};
  return (
    <Container>
      Choose Dog for Profile
      <DogsContainer>
        <DogWrapper>
          <Dog1 />
        </DogWrapper>
        <DogWrapper>
          <Dog2 />
        </DogWrapper>
        <DogWrapper>
          <Dog3 />
        </DogWrapper>
        <DogWrapper>
          <Dog4 />
        </DogWrapper>
        <DogWrapper>
          <Dog5 />
        </DogWrapper>
      </DogsContainer>
    </Container>
  );
};
