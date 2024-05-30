import styled from "styled-components";

const StyledImg = styled.img`
  border-radius: 5px;
  margin: 5px;
`;

export const Photo = () => {
  return <StyledImg src="https://picsum.photos/200/200" alt="random image" />;
};
