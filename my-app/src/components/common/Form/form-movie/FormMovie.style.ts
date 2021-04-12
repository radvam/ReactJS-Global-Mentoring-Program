import { styled, theme } from "../../../../theme";

export const FormMovieWrapper = styled.div`
  display: grid;
  row-gap: 25px;
`;

export const FormItem = styled.div`
  position: relative;
  .ant-input-number {
    width: 100%;
  }

  & > input {
    font-family: "Lato-Regular", sans-serif;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 1.2px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkGrey};
    width: 100%;
    height: 40px;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid ${theme.colors.darkGrey};
  }

  & > select[multiple] {
    font-family: "Lato-Regular", sans-serif;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 1.2px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkGrey};
    height: auto;
    width: 100%;
    border: 1px solid ${theme.colors.darkGrey};
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    & > option:checked {
      background-color: red;
    }
  }
`;

export const Title = styled.p`
  font-family: "Lato-Regular", sans-serif;
  font-size: 15px;
  letter-spacing: 1.2px;
  color: ${theme.mainColor};
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Error = styled.p`
  position: absolute;
  top: 22px;
  left: 5px;
  font-family: "Lato-Light", sans-serif;
  font-size: 13px;
  letter-spacing: 1.2px;
  color: ${theme.colors.green};
  font-weight: 600;
  margin: 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;

  & > button:first-child {
    margin-right: 10px;
  }
`;

export const Submit = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 40px;
  background-color: ${theme.mainColor};
  border-radius: 3px;
  color: ${theme.colors.white};
  text-transform: uppercase;
  font-family: "Lato-Regular", sans-serif;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.8px;
  cursor: pointer;
  border: 1px solid ${theme.mainColor};

  &:hover {
    background-color: ${theme.mainColor + theme.transparency["85"]};
  }
`;

export const Reset = styled(Submit)`
  background-color: ${theme.colors.dark};
  color: ${theme.mainColor};

  &:hover {
    background-color: ${theme.mainColor + theme.transparency["25"]};
  }
`;

export const MovieId = styled.p`
  font-family: "Lato-Light", sans-serif;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.8px;
  color: ${theme.colors.white};
  margin: 0;
`;
