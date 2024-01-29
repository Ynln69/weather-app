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
  // const [confirm, setConfirm] = useState(false);
  const [isAccess, setIsAccess] = useState(false);
  const dispatch = useDispatch();

  const location = useSelector(selectLocation);
  const lang = useSelector(selectLanguage);
  const scaleType = useSelector(selectScaleType);

  useEffect(() => {
    // const confirmGeolocation = window.confirm(
    //   "Веб-сайт WeatherWise бажає використовувати ваше місцеположення. Дозволити?"
    // );
    // if (!confirm) {
    //   dispatch(setLocation({ lat: 50.4501, lon: 30.5234 })); //координати Києва
    //   return;
    // }
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

  // const handleMyLocationClick = () => {
  //   setConfirm(true);
  // };

  return (
    <AppContainer>
      {/* <button onClick={handleMyLocationClick}>Get my location </button> */}
      <FilterLang />
      <FilterWeather />
      {isAccess && <WeatherList />}
    </AppContainer>
  );
};

export default App;
