import styled from "@emotion/styled";

export const Item = styled.li`
  position: relative;
  width: 350px;
  height: 257px;
  padding: 10px 15px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;

  background-color: ${(props) =>
    props.temperature <= 0 ? "#F1F2FF" : "#FFFAF1"};
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

export const TempBox = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 5px;
  position: absolute;
  bottom: 24px;
`;

export const Temperature = styled.p`
  font: normal normal normal 44px/64px Jost;
  letter-spacing: 0px;
`;

export const ScaleButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;

  color: ${(props) => (props.isActive ? "#000000" : "#8D8D8D")};
  font: normal normal normal 22px/32px Jost;
  letter-spacing: 0px;
`;

export const Feels = styled.p`
  position: absolute;
  left: 15px;
  bottom: 10px;

  font: normal normal normal 13px/19px Jost;
  letter-spacing: 0px;
  color: #c5c5c5;
  > span {
    margin-left: 5px;
    font-weight: 600;
  }
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
