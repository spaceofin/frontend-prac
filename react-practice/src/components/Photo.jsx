import styled from "styled-components";
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

export const Photo = ({ index, clicked, handleClick }) => {
  const url = `https://picsum.photos/seed/${index}200/200`;

  return (
    <Container>
      <StyledCheckCircle
        onClick={() => handleClick(index)}
        fill={clicked ? "red" : undefined}
        clicked={clicked ? 1 : 0}
      />
      <StyledImg src={url} alt="random image" />
    </Container>
  );
};
