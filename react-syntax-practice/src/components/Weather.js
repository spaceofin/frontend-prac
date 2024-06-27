import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const Container = styled.div`
  // display: flex;
  flex-direction: column;
  padding: 50px;
  height: 100vh;
  width: 100vw;
  background-color: #f76854;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: normal;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Spacer = styled.div`
  height: 30px;
`;

export const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const getWeather = async () => {
    if (!city && (!lat || !lon)) {
      alert("Please enter a city or latitude and longitude.");
      return;
    }
    let url = "";
    if (city) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    } else if (lat && lon) {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    }

    if (url) {
      try {
        const response = await axios.get(url);
        setWeather(response.data);
        console.log(response.data);
      } catch (err) {
        console.log("error:", err);
        setWeather(null);
      }

      setCity("");
      setLat("");
      setLon("");
    }
  };

  return (
    <Container>
      <Title>Weather App</Title>
      <InputGroup>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={getWeather}>Get Weather</button>
      </InputGroup>
      <Spacer />
      <InputGroup>
        <input
          type="text"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          placeholder="Enter lat"
        />
        <input
          type="text"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
          placeholder="Enter lon"
        />
        <button onClick={getWeather}>Get Weather</button>
      </InputGroup>
      <Spacer />

      {weather && (
        <div>
          <p>
            CITY: {weather.name}
            <br />
            WEATHER: {weather.weather[0].description}
            <br />
            TEMP: {(weather.main.temp - 273.15).toFixed(2)} °C
          </p>
        </div>
      )}
    </Container>
  );
};
