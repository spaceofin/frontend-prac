import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100vw;
  background-color: #e6e6e6;
  color: white;
  font-size: 20px;
`;

const Link = styled.a`
  margin: 20px;
`;

export const Header = () => {
  return (
    <Container>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/events">Events</Link>
    </Container>
  );
};
