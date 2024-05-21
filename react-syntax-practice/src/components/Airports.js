import styled from "styled-components";
import airportsList from "../data/airports-list.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #16a1cc;
  padding: 50px;
  color: white;
  font-size: 20px;
`;

const AirportWrapper = styled.div`
  margin: 2px 0px;
`;

export const Airports = () => {
  console.log("Airports component");
  // console.log(airportsList);
  return (
    <Container>
      {airportsList.map((airport) => (
        <AirportWrapper key={airport.id}>{airport.name}</AirportWrapper>
      ))}
    </Container>
  );
};
