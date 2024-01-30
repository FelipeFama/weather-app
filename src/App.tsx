import React, { useEffect, useState } from "react";
import { GlobalStyles } from "./styles/global";
import { WeatherCard } from "./styles/styles";
import { SearchBar } from "./components/SearchBar";
import { WeatherInfo } from "./components/WeatherInfo";
import { WeatherData } from "./components/types";
import { fetchWeather, fetchWeatherByIP } from "./services/weatherService";

export const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const city = await fetchWeatherByIP();
        const data = await fetchWeather(city);
        console.log(city);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    try {
      const data = await fetchWeather(query);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <GlobalStyles />
      <WeatherCard>
        <SearchBar onSearch={handleSearch} />
        <WeatherInfo data={weatherData} isLoading={isLoading} />
      </WeatherCard>
    </>
  );
};
