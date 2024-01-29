import { useDispatch, useSelector } from "react-redux";

import actions from "../../redux/weatherSlice";
import selectors from "../../redux/selectors";

import formatDate from "../../utils/formatDate";

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
  TempBox,
  ScaleButton,
} from "./WeatherItem.styled";
// import WeatherChart from "../WeatherChart/WeatherChart";

const { setScaleType } = actions;
const { selectScaleType } = selectors;

const WeatherItem = ({ weatherData }) => {
  console.log(weatherData);
  const dispatch = useDispatch();
  const scaleType = useSelector(selectScaleType);

  const handleUnitClick = (newScale) => {
    dispatch(setScaleType(newScale));
  };

  const formattedDate = formatDate(weatherData.dt);
  const roundedTemp = Math.round(weatherData.temp);
  const roundedFeelsLike = Math.round(weatherData.feels_like);
  const displayScaleType = scaleType === "metric" ? "\u2103" : "\u2109";

  return (
    <Item temperature={roundedTemp}>
      <>
        <ItemCity>
          {weatherData.cityName},<span>{weatherData.countryName}</span>
        </ItemCity>
        <ItemTime>{formattedDate}</ItemTime>
        <WeatherBox>
          <img src={weatherData.iconUrl} alt={weatherData.description} />
          <Weather>{weatherData.weather}</Weather>
        </WeatherBox>
        <div>{/* <WeatherChart city="Kyiv" /> */}</div>
        <TempBox>
          <Temperature>{roundedTemp}</Temperature>
          <ScaleButton
            onClick={() => handleUnitClick("metric")}
            isActive={scaleType === "metric"}
          >
            &#8451;
          </ScaleButton>
          |
          <ScaleButton
            onClick={() => handleUnitClick("imperial")}
            isActive={scaleType === "imperial"}
          >
            &#8457;
          </ScaleButton>
        </TempBox>
        <Feels>
          Feels like:
          <span>
            {roundedFeelsLike}
            {displayScaleType}
          </span>
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
