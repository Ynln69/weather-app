import { createAsyncThunk } from "@reduxjs/toolkit";
import service from "../service/openweathermapAPI";

const { getCurrentWeather, getWeatherForWeek } = service;

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

const fetchWeatherForWeek = createAsyncThunk(
  "weather/getDateForWeek",
  async ({ lat, lon }, thunkApi) => {
    console.log("fetchWeatherForWeek called with city_name:", lat, lon);
    try {
      const {
        data: { list },
      } = await getWeatherForWeek({ lat, lon });

      const firstEightItems = list.slice(0, 8);

      const listDetails = firstEightItems.map(({ dt, main: { temp } }) => ({
        dt,
        temp,
      }));
      console.log(listDetails);
      return listDetails;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const data = {
  fetchCurrentWeather,
  fetchWeatherForWeek,
};

export default data;
