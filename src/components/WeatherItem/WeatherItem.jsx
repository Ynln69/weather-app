import { useDispatch } from "react-redux";

import actions from "../../redux/weatherSlice";
import {
  Item,
  ItemCity,
  ItemTime,
  WeatherBox,
  Weather,
  Temperature,
  Feels,
  Parameters,
  ParametersItem,
} from "./WeatherItem.styled";

const { setScaleType } = actions;

const WeatherItem = ({ weatherData }) => {
  const dispatch = useDispatch();

  const handleUnitClick = (newScale) => {
    dispatch(setScaleType(newScale));
  };

  return (
    <Item>
      <>
        <ItemCity>
          {weatherData.cityName},<span>{weatherData.countryName}</span>
        </ItemCity>
        <ItemTime>Fri, 19 February, 10:17</ItemTime>
        <WeatherBox>
          <img src={weatherData.iconUrl} alt="" />
          <Weather>{weatherData.weather}</Weather>
        </WeatherBox>
        <div></div>
        <div>
          <Temperature>{weatherData.temp}</Temperature>
          <button onClick={() => handleUnitClick("metric")}>C</button>
          <button onClick={() => handleUnitClick("imperial")}>F</button>
        </div>
        <Feels>
          Feels like:<span>{weatherData.feels_like}</span>
        </Feels>
        <Parameters>
          <ParametersItem>
            Wind: <span>{weatherData.speed}m/s</span>
          </ParametersItem>
          <ParametersItem>
            Humidity: <span>{weatherData.humidity}%</span>
          </ParametersItem>
          <ParametersItem>
            Pressure: <span>{weatherData.pressure}Pa</span>
          </ParametersItem>
        </Parameters>
      </>
    </Item>
  );
};

export default WeatherItem;
