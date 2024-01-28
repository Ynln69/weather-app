import { createAsyncThunk } from "@reduxjs/toolkit";
import getCurrentWeather from "../service/openweathermapAPI";

const fetchCurrentWeather = createAsyncThunk(
  "weather/getCurrentDate",
  async ({ lat, lon, lang }, thunkApi) => {
    try {
      const result = await getCurrentWeather({ lat, lon, lang });
      console.log(result);
      return result;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const data = {
  fetchCurrentWeather,
};

export default data;
