import { useSelector } from "react-redux";
import selectors from "../../redux/selectors";

import WeatherItem from "../WeatherItem/WeatherItem";
import { List } from "./WeatherList.styled";

const { selectWeather } = selectors;

const WeatherList = () => {
  const weather = useSelector(selectWeather);
  return (
    <List>
      <WeatherItem weatherData={weather} />
    </List>
  );
};

export default WeatherList;
