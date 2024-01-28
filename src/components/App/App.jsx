import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/weatherSlice";
import selectors from "../../redux/selectors";
import operations from "../../redux/operations";

import FilterLang from "../LanguageFilter/LanguageFilter";
import FilterWeather from "../FilterWeather/FilterWeather";
import WeatherList from "../WeatherList/WeatherList";
import { AppContainer } from "./App.styled";
import { useEffect } from "react";

const { setLocation } = actions;
const { selectLocation } = selectors;
const { fetchCurrentWeather } = operations;

const App = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  if ("geolocation" in navigator) {
    console.log(1);
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        console.log(2);
        dispatch(setLocation({ lat: coords.latitude, lon: coords.longitude }));
      },
      (error) => {
        console.error(error.message);
      }
    );
  } else {
    console.log("Геолокація не підтримується цим браузером");
  }

  useEffect(() => {
    dispatch(fetchCurrentWeather());
  }, [dispatch, location]);

  return (
    <AppContainer>
      <FilterLang />
      <FilterWeather />
      <WeatherList />
    </AppContainer>
  );
};

export default App;
