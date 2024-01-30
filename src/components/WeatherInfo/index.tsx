import React from "react";
import { Weather } from "./styles";
import { WeatherData } from "../types";

interface WeatherInfoProps {
  data: WeatherData | null;
  isLoading: boolean;
}

export const WeatherInfo: React.FC<WeatherInfoProps> = ({
  data,
  isLoading,
}) => {
  console.log(data);
  return (
    <Weather className={isLoading ? "loading" : ""}>
      {isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <>
          <h2>{`Weather in ${data?.name || ""}`}</h2>
          <h1>{`${data?.main.temp} ºC`}</h1>
          <section>
            <img
              src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}.png`}
              alt="weather icon"
            />
            <p>{data?.weather[0].description}</p>
          </section>
          <p>{`humidity: ${data?.main.humidity}%`}</p>
          <p>{`Wind Speed: ${data?.wind.speed} km/h`}</p>
        </>
      ) : (
        <p>Data not available</p>
      )}
    </Weather>
  );
};
