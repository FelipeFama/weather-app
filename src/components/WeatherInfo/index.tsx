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
          <h2>`Weather in Fortaleza`</h2>
          <h1>28ºC</h1>
          <section>
            <img
              src="https://openweathermap.org/img/wn/01d.png"
              alt="weather icon"
            />
            <p>Clear sky</p>
          </section>
          <p>humidity: 40%</p>
          <p>Wind a speed: 6.2 km/h</p>
        </>
      ) : (
        <p>Data not available</p>
      )}
    </Weather>
  );
};
