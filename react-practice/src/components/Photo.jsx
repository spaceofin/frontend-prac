import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as CheckCircle } from "../assets/icons/check-circle.svg";

const Container = styled.div`
  position: relative;
`;

const StyledImg = styled.img`
  border-radius: 5px;
  margin: 5px;
`;

const StyledCheckCircle = styled(CheckCircle)`
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;

  ${({ clicked }) =>
    clicked &&
    `
    transform: scale(1.1);
  `}
`;

export const Photo = ({ index }) => {
  const url = `https://picsum.photos/seed/${index}200/200`;
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Container>
      <StyledCheckCircle
        onClick={handleClick}
        fill={clicked ? "red" : undefined}
        clicked={clicked}
      />
      <StyledImg src={url} alt="random image" />
    </Container>
  );
};
