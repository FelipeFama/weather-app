import { useEffect } from "react";
import { SearchBar } from "./components/SearchBar";
import { WeatherInfo } from "./components/WeatherInfo";
import { GlobalStyles } from "./styles/global";
import { WeatherCard } from "./styles/styles";
import { fetchWeather } from "./services/weatherService";

export default function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeather("fortaleza");
        console.log(data);
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <GlobalStyles />
      <WeatherCard>
        <SearchBar />
        <WeatherInfo />
      </WeatherCard>
    </>
  );
}
