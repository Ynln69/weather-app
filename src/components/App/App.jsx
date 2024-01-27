import { AppContainer } from "./App.styled";

import FilterLang from "../LanguageFilter/LanguageFilter";
import FilterWeather from "../FilterWeather/FilterWeather";
import WeatherList from "../WeatherList/WeatherList";

const App = () => {
  return (
    <AppContainer>
      <FilterLang />
      <FilterWeather />
      <WeatherList />
    </AppContainer>
  );
};

export default App;
