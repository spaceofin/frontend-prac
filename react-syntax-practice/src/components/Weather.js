import styled from "styled-components";

const Container = styled.div`
  // display: flex;
  flex-direction: column;
  padding: 50px;
  height: 100vh;
  width: 100vw;
  background-color: #f76854;
`;

export const Weather = () => {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  return (
    <Container>
      <div>Weather App</div>
    </Container>
  );
};
