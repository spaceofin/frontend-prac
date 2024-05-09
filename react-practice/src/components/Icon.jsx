import styled from "styled-components";
import "@fontsource/material-icons";
import "@fontsource/material-icons-round";

const Container = styled.span`
  font-size: 50px;
  color: ${(props) => props.color};
`;

export const Icon = ({ name, color }) => {
  return (
    <Container className="material-icons" name={name} color={color}>
      {name}
    </Container>
  );
};
