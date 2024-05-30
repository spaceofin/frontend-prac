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
`;

export const Photo = ({ index }) => {
  const baseUrl = "https://picsum.photos/200/200";
  const queryString = `?random=${index}`;

  return (
    <Container>
      <StyledCheckCircle />
      <StyledImg src={baseUrl + queryString} alt="random image" />
    </Container>
  );
};
