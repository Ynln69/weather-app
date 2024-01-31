import PropTypes from "prop-types";
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
import WeatherChart from "../WeatherChart/WeatherChart";

const { setScaleType } = actions;
const { selectScaleType } = selectors;

const WeatherItem = ({ weatherData }) => {
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
    <Item temperature={roundedTemp} key={weatherData.id}>
      <>
        <ItemCity>
          {weatherData.cityName},<span>{weatherData.countryName}</span>
        </ItemCity>
        <ItemTime>{formattedDate}</ItemTime>

        {weatherData.weather.map((item, index) => (
          <WeatherBox key={index}>
            <img src={item.iconUrl} alt={item.description} />
            <Weather>{item.main}</Weather>
          </WeatherBox>
        ))}
        <WeatherChart temperature={roundedTemp} />
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

WeatherItem.propTypes = {
  weatherData: PropTypes.shape({
    id: PropTypes.number,
    cityName: PropTypes.string,
    countryName: PropTypes.string,
    dt: PropTypes.number,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        iconUrl: PropTypes.string,
        description: PropTypes.string,
        main: PropTypes.string,
      })
    ),
    temp: PropTypes.number,
    feels_like: PropTypes.number,
    speed: PropTypes.number,
    humidity: PropTypes.number,
    pressure: PropTypes.number,
  }).isRequired,
};

export default WeatherItem;
