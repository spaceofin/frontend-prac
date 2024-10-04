import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchWeather, selectWeather } from "./weatherSlice";

export const Weather = () => {
  const [location, setLocation] = useState<string>("");
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(selectWeather);

  const handleShow = () => {
    if (location.trim()) {
      dispatch(fetchWeather(location));
    } else {
      alert("Enter location");
    }
  };

  return (
    <div className="flex flex-col items-center w-full bg-green-300 font-mono">
      <div className="flex w-full text-4xl font-bold mt-5 ml-72">
        CITY WEATHER
      </div>
      <div className="flex w-full justify-center items-center">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="ml-8 w-1/2 my-5 mx-1 text-xl rounded-md border-4 border-green-800 px-2"
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
    </div>
  );
};
