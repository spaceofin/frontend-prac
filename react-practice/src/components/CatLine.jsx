import styled, { keyframes } from "styled-components";
import { ReactComponent as Cat1 } from "../assets/images/cat1.svg";
import { ReactComponent as Cat2 } from "../assets/images/cat2.svg";
import { ReactComponent as Cat3 } from "../assets/images/cat3.svg";

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
  animation: ${roll} 20s linear infinite;
`;

const StyledCat2 = styled(Cat2)`
  animation: ${roll} 20s linear infinite;
`;

const StyledCat3 = styled(Cat3)`
  animation: ${roll} 20s linear infinite;
`;

export const CatLine = () => {
  return (
    <div>
      <StyledCat1 />
      <StyledCat2 />
      <StyledCat3 />
    </div>
  );
};
