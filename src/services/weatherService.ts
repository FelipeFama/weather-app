import axios from "axios";

const apiKey = import.meta.env.VITE_KEY_WEATHER;

export const fetchWeather = async (city: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export const fetchWeatherByIP = async () => {
  try {
    const response = await axios.get("https://ipinfo.io/json");
    return response.data.city;
  } catch (error) {
    error;
    throw error;
  }
};
