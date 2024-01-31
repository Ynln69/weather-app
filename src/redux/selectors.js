const selectDefaultLocation = (state) => state.defaultLocation;
const selectLocationForSearch = (state) => state.locationForSearch;
const selectScaleType = (state) => state.scaleType;
const selectLanguage = (state) => state.language;
const selectWeather = (state) => state.weather;
const selectWeatherForWeek = (state) => state.weatherForWeek;
const selectIsLoading = (state) => state.isLoading;
const selectError = (state) => state.error;

const data = {
  selectDefaultLocation,
  selectLocationForSearch,
  selectScaleType,
  selectLanguage,
  selectWeather,
  selectWeatherForWeek,
  selectIsLoading,
  selectError,
};

export default data;
