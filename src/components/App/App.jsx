import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/weatherSlice";
import selectors from "../../redux/selectors";
import operations from "../../redux/operations";

import FilterLang from "../LanguageFilter/LanguageFilter";
import FilterWeather from "../FilterWeather/FilterWeather";
import WeatherList from "../WeatherList/WeatherList";

import { AppContainer } from "./App.styled";

const { setDefaultLocation } = actions;
const {
  selectDefaultLocation,
  selectLanguage,
  selectScaleType,
  selectLocationForSearch,
} = selectors;
const { fetchCurrentWeather } = operations;

const App = () => {
  const [isAccess, setIsAccess] = useState(false);
  const dispatch = useDispatch();

  const defaultLocation = useSelector(selectDefaultLocation);
  const locationForSearch = useSelector(selectLocationForSearch);
  const lang = useSelector(selectLanguage);
  const scaleType = useSelector(selectScaleType);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          dispatch(
            setDefaultLocation({ lat: coords.latitude, lon: coords.longitude })
          );
          setIsAccess(true);
          dispatch(
            fetchCurrentWeather({
              lat: coords.latitude,
              lon: coords.longitude,
              lang,
              scaleType,
            })
          );
        },
        (error) => {
          console.error(error.message);
        }
      );
    } else {
      console.log("Геолокація не підтримується цим браузером");
    }
  }, [dispatch, lang, scaleType]);

  useEffect(() => {
    if (!locationForSearch) {
      return;
    }
    dispatch(fetchCurrentWeather({ ...locationForSearch, lang, scaleType }));
  }, [dispatch, locationForSearch, lang, scaleType]);

  return (
    <AppContainer>
      <FilterLang />
      <FilterWeather />
      {isAccess && (locationForSearch || defaultLocation) && <WeatherList />}
    </AppContainer>
  );
};

export default App;
