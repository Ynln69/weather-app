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
        },
      } = await getCurrentWeather({ lat, lon, lang, scaleType });
      console.log(
        cityName,
        countryName,
        weather,
        temp,
        feels_like,
        humidity,
        pressure,
        speed
      );
      const { icon, main } = weather[0];
      const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
      return {
        cityName,
        countryName,
        weather: main,
        temp,
        feels_like,
        humidity,
        pressure,
        speed,
        icon,
        iconUrl,
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
