import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.$bgcolor};
  color: black;
  height: 20vh;
  width: 70vw;
  padding: 30px 40px;
  border-radius: 10px;
`;

export const AboutSub1 = () => {
  return (
    <Container $bgcolor="#d2eda6">
      Welcome, <br />
      This is About subpage 1.
    </Container>
  );
};

export const AboutSub2 = () => {
  return (
    <Container $bgcolor="#aeed69">
      Welcome, <br />
      This is About subpage 2.
    </Container>
  );
};

export const AboutSub3 = () => {
  return (
    <Container $bgcolor="#9CED3B">
      Welcome, <br />
      This is About subpage 3.
    </Container>
  );
};
