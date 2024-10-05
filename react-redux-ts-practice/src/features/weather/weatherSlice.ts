import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { WeatherResponse, cityWeather } from "./weatherTypes";
import { RootState, AppThunk } from "../../app/store";

interface WeatherState {
  data: WeatherResponse | null;
  citiesWeather: cityWeather[];
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  data: null,
  citiesWeather: [],
  loading: false,
  error: null,
};

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ city, forSave = false }: { city: string; forSave?: boolean }) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        if (action.meta.arg.forSave === true) {
          state.citiesWeather.push({
            city: action.payload.name,
            weather: action.payload.weather[0].description,
          });
        } else {
          state.data = action.payload;
        }
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch weather data";
      });
  },
});

export const selectWeather = (state: RootState) => state.weather;

export default weatherSlice.reducer;
