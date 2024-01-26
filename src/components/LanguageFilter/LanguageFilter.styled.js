import styled from "@emotion/styled";

export const LangContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  flex-direction: row-reverse;
`;
export const LangSelect = styled.select`
  width: 59px;
  height: 23px;
  border: none;
  outline: none;

  color: #afafaf;
  font: normal normal normal 16px/23px Jost;
  letter-spacing: 0px;
`;

export const LangOption = styled.option`
  font: normal normal normal 14px/20px Jost;
  letter-spacing: 0px;
  color: #000000;
`;
