import { createSlice } from "@reduxjs/toolkit";
import operations from "./operations";

const { fetchCurrentWeather } = operations;

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    location: { lat: 50.4501, lon: 30.5234 }, //координати Києва
    scaleType: "celsius",
    language: "en",
    weather: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    setLocation(state, { payload }) {
      state.location = payload;
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
        state.weather = payload;
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
  },
});

const { setLocation, setScaleType, setLanguage } = weatherSlice.actions;
const weatherReducer = weatherSlice.reducer;

const data = {
  setLocation,
  setScaleType,
  setLanguage,
  weatherReducer,
};

export default data;
