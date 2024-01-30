import { createAsyncThunk } from "@reduxjs/toolkit";
import getCurrentWeather from "../service/openweathermapAPI";

const fetchCurrentWeather = createAsyncThunk(
  "weather/getCurrentDate",
  async ({ lat, lon, lang, scaleType }, thunkApi) => {
    try {
      const {
        data: {
          name: cityName,
          sys: { country: countryName },
          weather,
          main: { temp, feels_like, humidity, pressure },
          wind: { speed },
          dt,
          id,
        },
      } = await getCurrentWeather({ lat, lon, lang, scaleType });

      const weatherDetails = weather.map((w) => ({
        icon: w.icon,
        main: w.main,
        description: w.description,
        iconUrl: `https://openweathermap.org/img/wn/${w.icon}.png`,
      }));
      return {
        cityName,
        countryName,
        weather: weatherDetails,
        temp,
        feels_like,
        humidity,
        pressure,
        speed,
        dt,
        id,
      };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const data = {
  fetchCurrentWeather,
};

export default data;
