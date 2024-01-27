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
  font: normal normal normal 16px/23px Jost;
  letter-spacing: 0px;
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
  font: normal normal normal 44px/64px Jost;
  letter-spacing: 0px;
`;

export const Feels = styled.p`
  font: normal normal normal 13px/19px Jost;
  letter-spacing: 0px;
  color: #c5c5c5;
`;

export const Parameters = styled.ul`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
