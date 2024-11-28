import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchWeather, selectWeather } from "./weatherSlice";
import { cityList } from "./cityList";
import { searchCity } from "./searchCityApi";
import { City } from "./searchCityApi";
import SearchBar from "./components/SearchBar";

export const Weather = () => {
  const [city, setCity] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const dispatch = useAppDispatch();
  const { data, loading, error, citiesWeather } = useAppSelector(selectWeather);
  const [queryCity, setQueryCity] = useState("");
  const [searchedCities, setSearchedCities] = useState<City[]>([]);

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

  const handleSearch = async () => {
    const results = await searchCity(queryCity);
    setSearchedCities(results);
  };

  return (
    <div className="flex flex-col items-center w-full bg-green-300 font-mono pt-14">
      <SearchBar
        title="CITY WEATHER"
        inputValue={city}
        onInputChange={(e) => setCity(e.target.value)}
        placeholder="Enter City Name"
        buttonLabel="Show"
        onButtonClick={handleShow}
      />
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
      <div className="flex flex-col w-full items-center h-72 mt-6">
        <SearchBar
          title="SEARCH CITY"
          inputValue={queryCity}
          onInputChange={(e) => setQueryCity(e.target.value)}
          placeholder="Enter City Name"
          buttonLabel="Search"
          onButtonClick={handleSearch}
        />
        <div className="flex flex-col w-2/3 h-32 overflow-y-auto">
          {searchedCities &&
            searchedCities.map((city) => (
              <div key={city.id} className="flex gap-2 justify-start">
                <p>{city.country}</p>
                <p>{city.name}</p>
                <p>{city.longitude}</p>
                <p>{city.latitude}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
