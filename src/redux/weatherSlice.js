import { createSlice } from "@reduxjs/toolkit";
import operations from "./operations";

const { fetchCurrentWeather, fetchWeatherForWeek } = operations;

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    defaultLocation: null,
    locationForSearch: null,
    scaleType: "metric", //metric = Celsius | іmperial= Fahrenheit
    language: "en",
    weather: [],
    weatherForWeek: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setDefaultLocation(state, { payload }) {
      state.defaultLocation = payload;
    },
    setLocationForSearch(state, { payload }) {
      state.locationForSearch = payload;
    },
    setScaleType(state, { payload }) {
      state.scaleType = payload;
    },
    setLanguage(state, { payload }) {
      state.language = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentWeather.fulfilled, (state, { payload }) => {
        state.weather = [...state.weather, payload];
        state.isLoading = false;
      })
      .addCase(fetchCurrentWeather.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrentWeather.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
    builder
      .addCase(fetchWeatherForWeek.fulfilled, (state, { payload }) => {
        state.weatherForWeek = payload;
        state.isLoading = false;
      })
      .addCase(fetchWeatherForWeek.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchWeatherForWeek.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

const {
  setDefaultLocation,
  setLocationForSearch,
  setScaleType,
  setLanguage,
  addWeatherCard,
} = weatherSlice.actions;
const weatherReducer = weatherSlice.reducer;

const data = {
  setDefaultLocation,
  setLocationForSearch,
  setScaleType,
  setLanguage,
  addWeatherCard,
  weatherReducer,
};

export default data;
