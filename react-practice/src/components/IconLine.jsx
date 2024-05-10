import { Icon } from ".";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  // flex-direction: rows;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: ${(props) => props.theme.bgColor};
`;

const IconsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const IconLine = () => {
  return (
    <Container>
      {Array.from({ length: 15 }, (_, i) => (
        <IconsContainer key={i}>
          <Icon name="add" color="#ffffff" />
          <Icon name="favorite" color="#f54166" />
        </IconsContainer>
      ))}
    </Container>
  );
};
