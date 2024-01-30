const selectLocation = (state) => state.location;
const selectScaleType = (state) => state.scaleType;
const selectLanguage = (state) => state.language;
const selectWeather = (state) => state.weather;
const selectWeatherForWeek = (state) => state.weatherForWeek;
const selectIsLoading = (state) => state.isLoading;
const selectError = (state) => state.error;

const data = {
  selectLocation,
  selectScaleType,
  selectLanguage,
  selectWeather,
  selectWeatherForWeek,
  selectIsLoading,
  selectError,
};

export default data;
