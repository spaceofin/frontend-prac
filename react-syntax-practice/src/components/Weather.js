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
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      console.log("response:", response);
      console.log("city:", response.data.name);
      setWeather(response.data);
    } catch (err) {
      console.log("error:", err);
      setWeather(null);
    }
  };

  const getWeatherByCity = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      console.log("response:", response);
      console.log("city:", response.data.name);
      setWeather(response.data);
    } catch (err) {
      console.log("error:", err);
      setWeather(null);
    }
  };

  return (
    <Container>
      <Title>Weather App</Title>
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
      <InputGroup>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={getWeatherByCity}>Get Weather By City</button>
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
