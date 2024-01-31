import styled from "@emotion/styled";

export const Thumb = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 72px;
`;
export const Input = styled.input`
  width: 569px;
  height: 40px;
  padding: 5px 15px;
  border: none;
  outline: none;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;

  background: #ffffff 0% 0% no-repeat padding-box;
  color: #000000;
  font: normal normal normal 14px/20px Jost;
  letter-spacing: 0px;
`;
export const Button = styled.button`
  padding: 10px 44px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  background: #459de9 0% 0% no-repeat padding-box;
  color: #ffffff;
  font: normal normal normal 14px/20px Jost;
  letter-spacing: 0px;
  &:hover {
    background: #0000ff;
  }
`;
