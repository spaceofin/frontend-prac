import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 250px;
  background-color: #c8bfe7;
  border-radius: 20px;
  margin: 10px 30px;
  font-size: 30px;
  color: white;

  border: 5px solid #49185e;
  box-shadow: 10px 7px rgba(73, 25, 94, 1);
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

export const EventCard = ({ title }) => {
  return (
    <StyledLink to="/event-detail">
      <Container>{title}</Container>
    </StyledLink>
  );
};
