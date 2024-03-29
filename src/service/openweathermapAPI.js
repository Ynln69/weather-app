import axios from "axios";

const BASE_URL = "https://api.openweathermap.org";
const API_KEY = "c14cff97681cb9ac24875e2091301fef";

const getCurrentWeather = async ({ lat, lon, lang, scaleType }) => {
  return await axios(
    `${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${lang}&units=${scaleType}`
  );
};

const getWeatherForWeek = async ({ lat, lon }) => {
  return await axios(
    `${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
};

const data = {
  getCurrentWeather,
  getWeatherForWeek,
};

export default data;
