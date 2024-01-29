import { SearchBar } from "./components/SearchBar";
import { WeatherInfo } from "./components/WeatherInfo";
import { GlobalStyles } from "./styles/global";
import { WeatherCard } from "./styles/style";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <WeatherCard>
        <WeatherInfo />
        <SearchBar />
      </WeatherCard>
    </>
  );
}
