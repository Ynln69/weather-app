import { AppContainer } from "./App.styled";

import FilterLang from "../LanguageFilter/LanguageFilter";
import FilterWeather from "../FilterWeather/FilterWeather";

const App = () => {
  return (
    <AppContainer>
      <FilterLang />
      <FilterWeather />
    </AppContainer>
  );
};

export default App;
