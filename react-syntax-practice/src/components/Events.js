import styled from "styled-components";
import { EventCard } from "./EventCard";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #830fff;
  padding: 50px;
  color: white;
  font-size: 20px;
`;

export const Events = () => {
  console.log("Events component");
  return (
    <Container>
      {/* This is Events page. */}
      <EventCard title="Event 1" />
    </Container>
  );
};
