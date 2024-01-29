import React from "react";
import { Weather } from "./styles";

export const WeatherInfo = () => {
  return (
    <>
      <Weather>
        <h2>Weather in Fortaleza</h2>
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
      </Weather>
    </>
  );
};
