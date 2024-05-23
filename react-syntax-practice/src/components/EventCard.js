import styled from "styled-components";

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
`;

export const EventCard = ({ title }) => {
  return <Container>{title}</Container>;
};
