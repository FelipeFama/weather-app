import { SearchBar } from "./components/SearchBar";
import { WeatherInfo } from "./components/WeatherInfo";
import { GlobalStyles } from "./styles/global";
import { WeatherCard } from "./styles/styles";

export default function App() {
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
