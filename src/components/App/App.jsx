import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/weatherSlice";
import selectors from "../../redux/selectors";
import operations from "../../redux/operations";

import FilterLang from "../LanguageFilter/LanguageFilter";
import FilterWeather from "../FilterWeather/FilterWeather";
import WeatherList from "../WeatherList/WeatherList";
import { AppContainer } from "./App.styled";

const { setLocation } = actions;
const { selectLocation, selectLanguage, selectScaleType } = selectors;
const { fetchCurrentWeather } = operations;

const App = () => {
  const [isAccess, setIsAccess] = useState(false);
  const dispatch = useDispatch();

  const location = useSelector(selectLocation);
  const lang = useSelector(selectLanguage);
  const scaleType = useSelector(selectScaleType);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          dispatch(
            setLocation({ lat: coords.latitude, lon: coords.longitude })
          );
          setIsAccess(true);
        },
        (error) => {
          console.error(error.message);
        }
      );
    } else {
      console.log("Геолокація не підтримується цим браузером");
    }
  }, [dispatch]);

  useEffect(() => {
    if (!location) {
      return;
    }
    dispatch(fetchCurrentWeather({ ...location, lang, scaleType }));
  }, [dispatch, location, lang, scaleType]);

  return (
    <AppContainer>
      <FilterLang />
      <FilterWeather />
      {isAccess && <WeatherList />}
    </AppContainer>
  );
};

export default App;
