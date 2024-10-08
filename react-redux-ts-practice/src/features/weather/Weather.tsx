import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchWeather, selectWeather } from "./weatherSlice";
import { cityList } from "./cityList";

export const Weather = () => {
  const [city, setCity] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const dispatch = useAppDispatch();
  const { data, loading, error, citiesWeather } = useAppSelector(selectWeather);

  const handleShow = () => {
    if (city.trim()) {
      dispatch(fetchWeather({ city: city }));
    } else {
      alert("Enter location");
    }
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const handleSaveWeatherClick = () => {
    dispatch(fetchWeather({ city: selectedCity, forSave: true }));
  };

  return (
    <div className="flex flex-col items-center w-full bg-green-300 font-mono">
      <div className="flex w-full justify-center text-4xl font-bold mt-10">
        CITY WEATHER
      </div>
      <div className="flex w-2/3 justify-center items-center">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City Name"
          className="flex flex-grow my-5 mr-1 text-xl rounded-md border-4 border-green-800 px-2"
        />
        <button
          onClick={handleShow}
          className="h-9 rounded-md bg-amber-400 text-lg px-2 active:scale-95 active:bg-amber-500">
          Show
        </button>
      </div>
      <div className="flex flex-col w-full h-20 text-xl ml-72 mb-10">
        {loading && (
          <p className="flex justify-start h-full text-lg">Loading...</p>
        )}
        {error && <p className="text-lg text-red-500">{error}</p>}
        {data && !loading && !error && (
          <div>
            <p>{data.weather[0].description}</p>
            <p>Temperature: {data.main.temp}°C</p>
            <p>Humidity: {data.main.humidity}%</p>
          </div>
        )}
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="flex text-4xl font-bold justify-center pr-5 ">
          SAVE CITY WEATHERS
        </div>
        <div className="flex w-2/3 my-5 justify-center">
          <select
            id="city"
            value={selectedCity}
            onChange={handleCityChange}
            className="flex flex-grow min-w-0 h-9 pl-4 bg-white rounded-md mr-1 border-4 border-gray-500 text-xl">
            <option value="">Select a city</option>
            {cityList.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <button
            onClick={handleSaveWeatherClick}
            className="min-w-36 h-9 rounded-md bg-amber-400 text-lg px-1 active:scale-95 active:bg-amber-500 ">
            Save Weather
          </button>
        </div>
        <div className="grid grid-cols-3 justify-items-center overflow-auto w-4/5 my-5 h-44">
          {citiesWeather &&
            citiesWeather.map((cityWeather, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center w-36 h-36 m-2 rounded-md bg-gray-100">
                <p>{cityWeather.city}</p>
                <p className="text-sky-800">{cityWeather.weather}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
