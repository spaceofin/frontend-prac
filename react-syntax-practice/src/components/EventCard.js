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
  border: 5px solid #5f217a;
  box-shadow: 10px 7px rgba(73, 25, 94, 1);
`;

export const EventCard = ({ title }) => {
  return <Container>{title}</Container>;
};
