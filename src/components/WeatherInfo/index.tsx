import React from "react";
import { Content, Name, Temperature, Weather } from "./styles";
import { WeatherData } from "../types";

interface WeatherInfoProps {
  data: WeatherData | null;
  isLoading: boolean;
}

export const WeatherInfo: React.FC<WeatherInfoProps> = ({
  data,
  isLoading,
}) => {
  return (
    <Weather className={isLoading ? "loading" : ""}>
      {isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <>
          <Name>{`Weather in ${data?.name || ""}`}</Name>
          <Temperature>{`${data?.main.temp} ºC`}</Temperature>
          <Content>
            <img
              src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}.png`}
              alt="weather icon"
            />
            <p>{data?.weather[0].description}</p>
          </Content>
          <p>{`humidity: ${data?.main.humidity}%`}</p>
          <p>{`Wind Speed: ${data?.wind.speed} km/h`}</p>
        </>
      ) : (
        <p>Data not available</p>
      )}
    </Weather>
  );
};
