import styled, { css } from "styled-components";
import airportsList from "../data/airports-list.json";
import { useState } from "react";

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
  padding: 0px 10px;
  transition: color 0.5s;
  width: 350px;
  display: flex;
  justify-content: space-between;

  // background-color: ${({ clicked }) => (clicked ? "white" : null)};

  ${({ clicked }) =>
    clicked &&
    css`
      color: slateblue;
      background-color: white;
      border-radius: 5px;
      font-weight: 600;
    `}

  &:hover {
    color: slateblue;
    cursor: pointer;
  }
`;

export const Airports = () => {
  console.log("Airports component");
  // console.log(airportsList);

  const [selectedAirport, setSelectedAirport] = useState(null);

  const handleClick = (airport) => {
    setSelectedAirport(selectedAirport === airport.id ? null : airport.id);
  };

  return (
    <Container>
      {airportsList.map((airport) => (
        <AirportWrapper
          key={airport.id}
          onClick={() => handleClick(airport)}
          clicked={selectedAirport === airport.id}
        >
          <span>{airport.name}</span>
          {selectedAirport === airport.id && <span>CODE: {airport.code}</span>}
        </AirportWrapper>
      ))}
    </Container>
  );
};
