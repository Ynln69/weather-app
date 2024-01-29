import styled from "@emotion/styled";

export const Item = styled.li`
  position: relative;
  width: 350px;
  height: 257px;
  padding: 10px 15px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
`;

export const ItemCity = styled.h2`
  margin-bottom: 4px;
  font: normal normal normal 20px/23px Jost;
  letter-spacing: 0px;
  & > span {
    font-weight: normal;
  }
`;

export const ItemTime = styled.p`
  font: normal normal 300 18px/26px Jost;
  letter-spacing: 0px;
`;

export const WeatherBox = styled.div`
  position: absolute;
  top: 12px;
  right: 31px;
  display: flex;
  align-items: center;
`;

export const Weather = styled.p`
  font: normal normal normal 13px/19px Jost;
  letter-spacing: 0px;
  color: #c5c5c5;
`;

export const Temperature = styled.p`
  margin: 20px 0;
  font: normal normal normal 44px/64px Jost;
  letter-spacing: 0px;
  & > span {
    font-size: 24px;
    color: #707070;
    margin: 0 5px;
  }
`;

export const Feels = styled.p`
  position: absolute;
  left: 15px;
  bottom: 10px;

  font: normal normal normal 13px/19px Jost;
  letter-spacing: 0px;
  color: #c5c5c5;
`;

export const Parameters = styled.ul`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export const ParametersItem = styled.li`
  font: normal normal normal 12px/18px Jost;
  letter-spacing: 0px;
  color: #000000;
  > span {
    font-weight: 600;
    color: #ffa25b;
  }
`;
