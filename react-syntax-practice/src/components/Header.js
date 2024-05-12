import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100vw;
  background-color: #e6e6e6;
  color: white;
  font-size: 20px;
`;

const StyledLink = styled(NavLink)`
  margin: 20px;

  &.active {
    background-color: darkgrey;
    border-radius: 5px;
    padding: 3px 5px;
  }
`;

export const Header = () => {
  return (
    <Container>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/events">Events</StyledLink>
    </Container>
  );
};
