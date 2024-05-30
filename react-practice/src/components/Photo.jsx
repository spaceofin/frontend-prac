import styled from "styled-components";

const StyledImg = styled.img`
  border-radius: 5px;
  margin: 5px;
`;

export const Photo = ({ index }) => {
  const baseUrl = "https://picsum.photos/200/200";
  const queryString = `?random=${index}`;

  return <StyledImg src={baseUrl + queryString} alt="random image" />;
};
