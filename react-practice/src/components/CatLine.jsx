import styled, { keyframes } from "styled-components";
import { ReactComponent as Cat1 } from "../assets/images/cat1.svg";
import { ReactComponent as Cat2 } from "../assets/images/cat2.svg";
import { ReactComponent as Cat3 } from "../assets/images/cat3.svg";

const Container = styled.div`
  display: flex;
  width: 100vw;
  overflow: hidden;
`;

const roll = keyframes`
  0% {
    transform: translateX(0) rotate(0deg);
  }
  25% {
    transform: translateX(25vw) rotate(360deg);
  }
  50% {
    transform: translateX(50vw) rotate(720deg);
  }
  100% {
    transform: translateX(100vw) rotate(1080deg);
  }
`;

const StyledCat1 = styled(Cat1)`
  animation: ${roll} 10s linear infinite alternate;
`;

const StyledCat2 = styled(Cat2)`
  animation: ${roll} 10s linear infinite alternate;
`;

const StyledCat3 = styled(Cat3)`
  animation: ${roll} 10s linear infinite alternate;
`;

export const CatLine = () => {
  return (
    <Container>
      <StyledCat1 />
      <StyledCat2 />
      <StyledCat3 />
    </Container>
  );
};
