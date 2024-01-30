import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { WeatherInfo } from "./components/WeatherInfo";
import { GlobalStyles } from "./styles/global";
import { WeatherCard } from "./styles/styles";
import { fetchWeather, fetchWeatherByIP } from "./services/weatherService";
import { WeatherData } from "./components/types";

export const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const city = await fetchWeatherByIP();
        const data = await fetchWeather(city);
        console.log(data);
        setWeatherData(data);
      } catch (error) {
        console.log("Error fetching weather data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <GlobalStyles />
      <WeatherCard>
        <SearchBar />
        <WeatherInfo data={weatherData} isLoading={isLoading} />
      </WeatherCard>
    </>
  );
};
