import { useSelector } from "react-redux";
import selectors from "../../redux/selectors";

import WeatherItem from "../WeatherItem/WeatherItem";
import { List } from "./WeatherList.styled";

const { selectWeather } = selectors;

const WeatherList = () => {
  const weather = useSelector(selectWeather);
  return (
    <List>
      {weather.map((item) => {
        return <WeatherItem weatherData={item} />;
      })}
    </List>
  );
};

export default WeatherList;
