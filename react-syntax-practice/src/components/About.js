import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #199656;
  padding: 50px;
  color: white;
  font-size: 20px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  color: #0d451e;
  font-size: 22px;
`;

const EmptyBox = styled.div`
  height: 20px;
`;

export const About = () => {
  console.log("About component");
  return (
    <Container>
      This is About page.
      <EmptyBox />
      <LinksContainer>
        <StyledLink to="/about/1">About-1</StyledLink>
        <StyledLink to="/about/2">About-2</StyledLink>
        <StyledLink to="/about/3">About-3</StyledLink>
      </LinksContainer>
      <EmptyBox />
      <EmptyBox />
      <Outlet />
    </Container>
  );
};
