import {
  Item,
  ItemCity,
  ItemTime,
  WeatherBox,
  Weather,
  Temperature,
  Feels,
  Parameters,
} from "./WeatherItem.styled";

const WeatherItem = () => {
  return (
    <Item>
      <>
        <ItemCity></ItemCity>
        <ItemTime>Fri, 19 February, 10:17</ItemTime>
        <WeatherBox>
          <img src="" alt="" />
          <Weather>Sunny</Weather>
        </WeatherBox>
        <div></div>
        <Temperature>+18</Temperature>
        <Feels>
          Feels like:<span></span>
        </Feels>
        <Parameters>
          <li>
            Wind: <span></span>
          </li>
          <li>
            Humidity: <span></span>
          </li>
          <li>
            Pressure: <span></span>
          </li>
        </Parameters>
      </>
    </Item>
  );
};

export default WeatherItem;
