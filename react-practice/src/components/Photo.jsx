import styled from "styled-components";
import { ReactComponent as CheckCircle } from "assets/icons/check-circle.svg";
import { ReactComponent as Cancel } from "assets/icons/cancel.svg";
import { useCartPhotos } from "contexts/CartPhotosContext";

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

const StyledCancel = styled(Cancel)`
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
`;

export const Photo = ({
  index,
  clicked,
  handleClick,
  handleCancelClick,
  needCheckCircle = null,
  needCancel = null,
}) => {
  const { randomNumber } = useCartPhotos();
  const url = `https://picsum.photos/seed/${index + randomNumber}/200/200`;

  console.log("index:", index, "randomNumber:", randomNumber, " url:", url);

  return (
    <Container>
      {needCheckCircle ? (
        <StyledCheckCircle
          onClick={() => handleClick(index)}
          fill={clicked ? "red" : undefined}
          clicked={clicked ? 1 : 0}
        />
      ) : null}
      {needCancel ? (
        <StyledCancel onClick={() => handleCancelClick(index)} />
      ) : null}
      <StyledImg src={url} alt="random image" />
    </Container>
  );
};
